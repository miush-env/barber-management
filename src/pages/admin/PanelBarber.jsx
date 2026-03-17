import Header from '../../components/panelBarber/Header'
import NextAppointment from '../../components/panelBarber/NextAppointment'
import UpcomingAppointment from '../../components/panelBarber/UpcomingAppointment'
import CardData from '../../components/panelBarber/cards/CardData'
import NavBar from '../../components/NavBar'
import { NavLink } from 'react-router'

function PanelBarber() {
	return (
		<main className='bg-gray-100 flex flex-col relative min-h-screen pb-20'>
			<Header
				name='John Doe'
				photo='https://i.pinimg.com/736x/4a/d1/13/4ad113eaace2e06b92f78dc15c1cf8de.jpg'
				notifications={5}
			/>

			<div className=''>
				<NextAppointment />
				<UpcomingAppointment />

				<article className='flex justify-between p-6 gap-6'>
					<CardData title='Clientes' value='4/8' style='clients' />
					<CardData title='Ganancia' value='24300' style='earnings' />
				</article>
			</div>

			<NavBar />

			<NavLink
				to='/crear-cita'
				className='fixed right-3 bottom-15 bg-linear-to-t from-green-500 to-green-600 shadow-lg active:to-green-500/90 
				active:from-green-600/90 shadow-green-300 rounded-full p-1 transition-colors duration-300 '
			>
				
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='34'
					height='34'
					viewBox='0 0 24 24'
					fill='none'
					stroke='#fff'
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='w-9'
				>
					<path stroke='none' d='M0 0h24v24H0z' fill='none' />
					<path d='M12 5l0 14' />
					<path d='M5 12l14 0' />
				</svg>
			</NavLink>
		</main>
	)
}

export default PanelBarber