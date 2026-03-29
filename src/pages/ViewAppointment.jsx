import NavBar from '@components/NavBar.jsx'
import CardClientsStatus from '@components/viewAppointment/cards/CardClientsStatus'
import PendingShifts from '../components/viewAppointment/cards/PendingShifts.jsx'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { getNameEvent, bookingEvent } from '../utils/Bookings.js'
function ViewAppointment() {
	const navigate = useNavigate()

	const [appointments, setAppointments] = useState([])

	useEffect(() => {
		const GetApiCal = async ()=> {
			try {
				const [nameEvent, booking]= await Promise.all([getNameEvent(), bookingEvent()]) 

				setAppointments(booking)
				console.log('Eventos :',nameEvent)
				console.log('Citas :',booking)
			} catch (error) {
				console.log('Error: ', error)		
			}
		}
		GetApiCal()
	}, [])

	const formatDate = (dateString) => {
		const date = new Date(dateString)

		return date.toLocaleString('es-AR', {
			weekday: 'long',
			day: 'numeric',
			month: 'short',
			hour: '2-digit',
			minute: '2-digit',
		})
	}

	const cancelBooking = async (uid) => {
		try {
			await fetch(`https://api.cal.com/v2/bookings/${uid}/cancel`, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_API_SECRET}`,
					'cal-api-version': '2024-08-13',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					cancellationReason: 'Cancelado desde la app',
				}),
			})

			setAppointments((prev) => prev.filter((cita) => cita.uid !== uid))
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<main className='bg-white min-h-screen pb-20'>
			<header className='flex items-center p-4 border-b border-gray-500 bg-white'>
				<span
					className=''
					onClick={() => {
						navigate('/inicio')
					}}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='#555'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
						class='icon icon-tabler icons-tabler-outline icon-tabler-arrow-left'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<path d='M5 12l14 0' />
						<path d='M5 12l6 6' />
						<path d='M5 12l6 -6' />
					</svg>
				</span>
				<h1 className='text-xl font-bold text-center flex-1 '>Tus Citas</h1>
			</header>

			<article className='p-4 flex gap-4'>
				<CardClientsStatus title='Totales' value='20' style='total' />
				<CardClientsStatus title='Atendidos' value='20' style='complete' />
				<CardClientsStatus title='Cancelados' value='20' style='delete' />
			</article>

			<article>
				<h2 className='text-xl pl-4 font-bold uppercase my-8'>
					Turnos pendientes
				</h2>
				<section>
					{appointments.map((cita) => (
						<PendingShifts
							key={cita.id}
							service={cita.title}
							time={formatDate(cita.start)}
							status={true}
							barber={cita.attendees?.[0]?.name || 'Sin nombre'}
							price={10000}
							cita={cita}
							onCancel={cancelBooking}
						/>
					))}
				</section>
			</article>

			<section className='fixed bottom-0 w-full h-14'>
				<NavBar />
			</section>
		</main>
	)
}

export default ViewAppointment
