import Header from '../../components/panelBarber/Header'
import NextAppointment from '../../components/panelBarber/NextAppointment'
import UpcomingAppointment from '../../components/panelBarber/UpcomingAppointment'
import CardData from '../../components/panelBarber/cards/CardData'
import NavBar from '../../components/NavBar'
import { useEffect } from 'react'
import { getTodayBookings } from '../../utils/Bookings'

function PanelBarber() {
	useEffect(() => {
		getTodayBookings()
	}, [])

	return (
		<main className='flex flex-col relative min-h-screen pb-20 '>
			<Header
				name='John Doe'
				photo='https://i.pinimg.com/736x/4a/d1/13/4ad113eaace2e06b92f78dc15c1cf8de.jpg'
				notifications={5}
			/>

			<section className='flex justify-between gap-4 items-center px-4'>
				<CardData title='Citas de hoy' value={5}/>
				<CardData title='Ingresos totales' value={50000} style='earnings'/>
			</section>

			<section>
				<NextAppointment
					nameClient='Ariel Dundo'
					status='confirmada'
					time='10:30'
					serviceName='Corte clasico'
					timeService='30 min'
					price='7000'
				/>
				<UpcomingAppointment />
			</section>

			<section className='fixed bottom-0 w-full h-14'>
				<NavBar />
			</section>
		</main>
	)
}

export default PanelBarber
