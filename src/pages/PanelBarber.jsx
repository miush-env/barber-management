import NavBar from '../components/panelBarber/NavBar'
import NextAppointment from '../components/panelBarber/NextAppointment'
import UpcomingAppointment from '../components/panelBarber/UpcomingAppointment'
import CardData from '../components/panelBarber/cards/CardData'

function PanelBarber() {
	return (
		<main className='bg-gray-100 h-screen'>
			<NavBar
				name='John Doe'
				photo='https://i.pinimg.com/736x/4a/d1/13/4ad113eaace2e06b92f78dc15c1cf8de.jpg'
				notifications={5}

			/>
			<NextAppointment />
			<UpcomingAppointment />
			<article className='flex justify-between p-6 gap-6'>
				<CardData title='Clientes' value='4/8' style='clients' />
				<CardData title='Ganancia' value='24300' style='earnings' />
			</article>
		
		</main>
	)
}

export default PanelBarber