import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router'
import ServiceCard from '@components/CreateAppointment/ServiceCard'
import ButtonCallCal from '../components/CreateAppointment/Cal.com/ButtonCallCal'
import {
	serviceCorte,
	serviceCorteBarba,
	serviceSoloPuntas,
	serviceGlobal,
	serviceBarba,
} from '../utils/ServiceCal'
import { getNameEvent } from '../utils/Bookings'
import { useEffect, useState } from 'react'
import Header from './Header'

function CreateAppointment() {
	const [nameEvent, setNameEvent] = useState([])
	const navigate = useNavigate()

	const functionMapper = {
		'corte-clasico': serviceCorte,
		'corte-clasico-barba': serviceCorteBarba,
		'tinte-solo-puntas': serviceSoloPuntas,
		global: serviceGlobal,
		barba: serviceBarba,
	}

	useEffect(() => {
		const fetchNameEvent = async () => {
			try {
				const res = await getNameEvent()
				if (res) {
					setNameEvent(res)
				}
			} catch (error) {
				console.error('Error en la petición:', error)
			}
		}
		fetchNameEvent()
	}, [])

	return (
		<main className='bg-gray-100 min-h-screen'>
			<Header path='/inicio' name='Agendar Cita' />

			<div className='h-full bg-gray-100'>
				<section className='mb-6' aria-labelledby='services-title'>
					<div className='flex flex-col gap-4 p-4'>
						{nameEvent.map((s, index) => {
							const calFunction = functionMapper[s.slug] || serviceCorte

							return (
								<ButtonCallCal key={index} service={calFunction}>
									<ServiceCard key={index} {...s} />
								</ButtonCallCal>
							)
						})}
					</div>
				</section>
			</div>

			<section className='fixed bottom-0 w-full h-14'>
				<NavBar />
			</section>
		</main>
	)
}

export default CreateAppointment
