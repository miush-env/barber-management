import Header from '../../components/panelBarber/Header'
import NextAppointment from '../../components/panelBarber/NextAppointment'
import UpcomingAppointment from '../../components/panelBarber/UpcomingAppointment'
import CardData from '../../components/panelBarber/cards/CardData'
import NavBar from '../../components/NavBar'
import { useEffect } from 'react'
import { getTodayBookings } from '../../utils/Bookings'

import { useUser } from '@clerk/react'

function PanelBarber() {
	const { user, isSignedIn } = useUser()

	const sendEmail = async (email, clerkId, firstName, lastName, imageUrl) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const res = await fetch("http://localhost:3000/Api/users/relation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, clerkId, firstName, lastName, imageUrl })
    });
  } catch (error) {
    console.error(error);
  }
};

	useEffect(() => {
		if (isSignedIn) {
			sendEmail(user.emailAddresses[0].emailAddress, user.id, user.firstName, user.lastName, user.imageUrl);
		} else {
			console.log('no tienes sesión iniciada')
		}

		getTodayBookings()
	}, [])

	return (
		<main className='flex flex-col relative min-h-screen bg-gray-50 pb-20 '>
			<Header
				notifications={1}
			/>

			<section className='flex justify-between gap-4 items-center px-4'>
				<CardData title='Citas de hoy' value={23}/>
				<CardData title='Ingresos totales' value={140820} style='earnings'/>
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

			<section className='fixed bottom-0 w-full px-5'>
				<NavBar />
			</section>
		</main>
	)
}

export default PanelBarber
