import Header from '../components/panelBarber/Header'
import NextAppointment from '../components/panelBarber/NextAppointment'
import UpcomingAppointment from '../components/panelBarber/UpcomingAppointment'
import CardData from '../components/panelBarber/cards/CardData'
import NavBar from '../components/NavBar'


function PanelBarber() {
	return (
		<main className='bg-gray-100 min-h-screen flex flex-col relative'>
			<Header
				name='John Doe'
				photo='https://i.pinimg.com/736x/4a/d1/13/4ad113eaace2e06b92f78dc15c1cf8de.jpg'
				notifications={5}
			/>

			<div className='flex-1'>
				<NextAppointment />
				<UpcomingAppointment />

				<article className='flex justify-between p-6 gap-6'>
					<CardData title='Clientes' value='4/8' style='clients' />
					<CardData title='Ganancia' value='24300' style='earnings' />
				</article>
			</div>

			<footer>
				<NavBar />
			</footer>

			<a
				href='#'
				className='absolute right-3 bottom-15 bg-linear-to-t from-green-500 to-green-600 shadow-lg shadow-green-300 rounded-full p-1'
			>
				<img src='/src/assets/plus.svg' alt='crear cita' className='w-9' />
			</a>
		</main>
	)
}

export default PanelBarber