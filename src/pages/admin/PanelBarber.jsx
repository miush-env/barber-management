import Header from '../../components/panelBarber/Header'
import NextAppointment from '../../components/panelBarber/NextAppointment'
import UpcomingAppointment from '../../components/panelBarber/UpcomingAppointment'
import CardData from '../../components/panelBarber/cards/CardData'
import NavBar from '../../components/NavBar'
import { useEffect } from 'react'
import { GetTodayBookings, GetBookingsTodayData } from '../../utils/Bookings'
// import gradientBg from '../../assets/gradient-bg.png'

import { useLocation } from 'react-router'
import { useState } from 'react'
import { useUser } from '@clerk/react'

import { checkRole } from '../../utils/UserCheckRol'
import { getProfitToday } from '../../utils/ProfitToday'

function PanelBarber() {
	const location = useLocation()
	const { user } = useUser()
	const [todayAppointments, setTodayAppointments] = useState([])
	const [todayBookingsCount, setTodayBookingsCount] = useState(0)
	const currentQuote =
		todayAppointments.length > 0 ? todayAppointments[0] : null
	const [isAdmin, setIsAdmin] = useState(false)
	const [profitToday, setProfitToday] = useState(0)

	useEffect(() => {
		const loadTodayBookings = async () => {
			try {
				const bookings = await GetTodayBookings()
				setTodayAppointments(bookings)
			} catch (error) {
				console.error('Error al obtener las citas de hoy:', error)
			}
		}

		loadTodayBookings()
	}, [location])

	useEffect(() => {
		const loadTodayBookingsCount = async () => {
			try {
				const count = await GetBookingsTodayData(
					user.primaryEmailAddress.emailAddress,
				)
				console.log(count)
				setTodayBookingsCount(count.length)
			} catch (error) {
				console.error('Error al obtener el conteo de citas de hoy:', error)
			}
		}

		loadTodayBookingsCount()
	}, [user.primaryEmailAddress.emailAddress])

	useEffect(() => {
		const checkRoleAsync = async () => {
			const checkRoleResult = await checkRole(user.id)
			setIsAdmin(checkRoleResult.ok)
		}
		checkRoleAsync()
	}, [user.id])

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
