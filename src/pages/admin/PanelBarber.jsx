import Header from '../../components/panelBarber/Header'
import NextAppointment from '../../components/panelBarber/NextAppointment'
import UpcomingAppointment from '../../components/panelBarber/UpcomingAppointment'
import CardData from '../../components/panelBarber/cards/CardData'
import NavBar from '../../components/NavBar'
import { useEffect } from 'react'
import { GetTodayBookings, GetBookingsTodayCount } from '../../utils/Bookings'
import gradientBg from '../../assets/gradient-bg.png'

import { useLocation } from 'react-router'
import { useState } from 'react'
import { useUser } from '@clerk/react'

function PanelBarber() {
	const  location = useLocation()
	const { user } = useUser()
	console.log(user)
	const [todayAppointments, setTodayAppointments] = useState([])
	const [todayBookingsCount, setTodayBookingsCount] = useState(0)
	const currentQuote = todayAppointments.length > 0 ? todayAppointments[0] : null

	useEffect(() => {
		const loadTodayBookings = async () => {
			try {
				const bookings = await GetTodayBookings()
				setTodayAppointments(bookings)
				// bookings?.forEach((booking, index) => {
				// 	console.log(`Cita ${index + 1}:`, booking)
				// })
			} catch (error) {
				console.error('Error al obtener las citas de hoy:', error)
			}
		}

		loadTodayBookings()
	}, [location])

	useEffect(()=>{
		const loadTodayBookingsCount = async () => {
			try {
				const count = await GetBookingsTodayCount(user.primaryEmailAddress.emailAddress)
				setTodayBookingsCount(count)
			} catch (error) {
				console.error('Error al obtener el conteo de citas de hoy:', error)
			}
		}

		loadTodayBookingsCount()
	}, [user.primaryEmailAddress.emailAddress])

	return (
		<main className='flex flex-col relative min-h-screen bg-cover bg-center pb-20 ' style={{ backgroundImage: `url(${gradientBg})`}}>
			<Header
				notifications={1}
			/>

			<section className='flex justify-between gap-4 items-center px-4'>
				<CardData title='Citas de hoy' value={todayBookingsCount}/>
				<CardData title='Ingresos totales' value={140820} style='earnings'/>
			</section>

			<section>
				<NextAppointment appointment={currentQuote}/>
				<UpcomingAppointment appointments={todayAppointments} />
			</section>

			<section className='fixed bottom-0 w-full px-5'>
				<NavBar />
			</section>
		</main>
	)
}

export default PanelBarber
