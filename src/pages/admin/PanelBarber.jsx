import Header from '../../components/panelBarber/Header'
import NextAppointment from '../../components/panelBarber/NextAppointment'
import UpcomingAppointment from '../../components/panelBarber/UpcomingAppointment'
import CardData from '../../components/panelBarber/cards/CardData'
import NavBar from '../../components/NavBar'
import { useEffect, useMemo } from 'react'
import {
	GetTodayBookings,
	GetBookingsTodayData,
	GetBookingsStatus,
} from '../../utils/Bookings'

import { useLocation } from 'react-router'
import { useState } from 'react'
import { useUser } from '@clerk/react'

import { getProfitToday } from '../../utils/ProfitToday'
import { checkRole } from '../../utils/UserCheckRol'

function PanelBarber() {
	const location = useLocation()
	const { user } = useUser()
	const [todayAppointments, setTodayAppointments] = useState([])
	const [userBookingsCount, setUserBookingsCount] = useState(0)
	const currentQuote =
		todayAppointments.length > 0 ? todayAppointments[0] : null
	const [isAdmin, setIsAdmin] = useState(false)
	const [profitToday, setProfitToday] = useState(0)

	useEffect(() => {
		const verifyRole = async () => {
			if (!user?.id) return

			const isOwner = await checkRole(user.id)
			setIsAdmin(isOwner)
		}

		verifyRole()
	}, [user])

	useEffect(() => {
		const loadTodayBookings = async () => {
			try {
				if (isAdmin) {
					const allBookings = await GetTodayBookings()
					setTodayAppointments(allBookings)
					return
				}
				const bookings = await GetBookingsStatus(
					user.primaryEmailAddress.emailAddress,
					'all',
					true,
				)
				setTodayAppointments(bookings)
			} catch (error) {
				console.error('Error al obtener las citas de hoy:', error)
			}
		}

		loadTodayBookings()
	}, [user.primaryEmailAddress.emailAddress, isAdmin])

	useEffect(() => {
		if (isAdmin) return

		const loadTodayBookingsCount = async () => {
			try {
				const count = await GetBookingsTodayData(
					user.primaryEmailAddress.emailAddress,
				)
				setUserBookingsCount(count.length)
			} catch (error) {
				console.error('Error al obtener el conteo de citas de hoy:', error)
			}
		}

		loadTodayBookingsCount()
	}, [user.primaryEmailAddress.emailAddress, isAdmin])

	const confirmedTodayCount = useMemo(
		() =>
			todayAppointments.filter(
				(appointment) => appointment.status === 'accepted',
			).length,
		[todayAppointments],
	)

	const todayBookingsCount = isAdmin ? confirmedTodayCount : userBookingsCount

	useEffect(() => {
		const calculateProfit = () => {
			const profit = getProfitToday(todayAppointments)
			setProfitToday(profit)
		}
		calculateProfit()
	}, [todayAppointments])

	return (
		<main className='flex flex-col bg-gray-100/50 relative min-h-screen bg-cover bg-center pb-20 '>
			<div className='mb-5'>
				<Header />
			</div>

			<section className='flex justify-between gap-4 items-center px-4'>
				<CardData title='Citas del dia' value={todayBookingsCount} />
				<CardData
					title={isAdmin ? 'Ingresos del dia' : 'Gasto estimado'}
					value={profitToday}
					style='earnings'
				/>
			</section>

			<section>
				<NextAppointment appointment={currentQuote} />
				<UpcomingAppointment appointments={todayAppointments} />
			</section>

			<section className='fixed bottom-0 w-full px-5'>
				<NavBar />
			</section>
		</main>
	)
}

export default PanelBarber
