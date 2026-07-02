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
		<main className='flex flex-col relative min-h-screen overflow-hidden bg-[#141419] bg-cover bg-center pb-24'>
			{/* Iluminación ambiental con animación azulada y acento dorado luminoso */}
			<div className='pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.09),transparent_60%)]' />
			<div className='pointer-events-none fixed top-[-12%] left-1/2 -translate-x-1/2 h-[560px] w-[780px] rounded-full bg-blue-500/[0.1] blur-[170px] animate-[pulseSoft_9s_ease-in-out_infinite]' />
			<div className='pointer-events-none fixed bottom-0 -right-20 h-[400px] w-[400px] rounded-full bg-[#e3b869]/[0.08] blur-[150px]' />

			<div className='relative z-10'>
				<Header />
			</div>

			<section className='relative z-10 flex justify-between gap-4 items-stretch px-4 mt-6'>
				<CardData title='Citas del dia' value={todayBookingsCount} />
				<CardData
					title={isAdmin ? 'Ingresos del dia' : 'Gasto estimado'}
					value={profitToday}
					style='earnings'
				/>
			</section>

			<section className='relative z-10'>
				<NextAppointment appointment={currentQuote} />
				<UpcomingAppointment appointments={todayAppointments} />
			</section>

			<section className='fixed bottom-0 w-full px-5 z-20'>
				<NavBar />
			</section>
		</main>
	)
}

export default PanelBarber
