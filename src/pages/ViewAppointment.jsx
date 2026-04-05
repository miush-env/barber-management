import NavBar from '@components/NavBar.jsx'
import CardClientsStatus from '@components/viewAppointment/cards/CardClientsStatus'
import PendingShifts from '../components/viewAppointment/cards/PendingShifts.jsx'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { bookingEvent, getNameEvent } from '../utils/Bookings.js'

function ViewAppointment() {
	const navigate = useNavigate()

	const [appointments, setAppointments] = useState([])
	const [ dataEvent, setDataEvent ] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const loadAllData = async () => {
    setLoading(true); // Aseguramos que empiece en true
    try {
      // Ejecutamos ambas peticiones en paralelo para mayor velocidad
      const [booking, events] = await Promise.all([
        bookingEvent(),
        getNameEvent()
      ]);

      setAppointments(booking);
      if (events) setDataEvent(events);
    } catch (error) {
      console.error('Error cargando datos:', error);
    } finally {
      setLoading(false);
    }
  };

  loadAllData();
	}, [])

	return (
		<main className='bg-white min-h-screen flex flex-col pb-20'>
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

			<article className='p-4 h-28 flex gap-4'>
				<CardClientsStatus title='Totales' value='20' style='total' />
				<CardClientsStatus title='Atendidos' value='20' style='complete' />
				<CardClientsStatus title='Cancelados' value='20' style='delete' />
			</article>

			<article className='flex-1 flex flex-col'>
				<h2 className='text-xl pl-4 font-bold uppercase my-8'>
					Turnos pendientes
				</h2>
				<section
					className='flex-1 flex flex-col items-center justify-center'
				>
					{loading ? (
						<div className='flex flex-col items-center gap-4'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='45'
								height='45'
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='animate-spin stroke-blue-700'
								viewBox='0 0 24 24'
							>
								<path fill='none' stroke='none' d='M0 0h24v24H0z' />
								<path d='M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5' />
							</svg>
							<p className='text-center animate-pulse text-xl font-bold text-gray-700'>
								Cargando...
							</p>
						</div>
					) : appointments.length > 0 ? (
						<div className='flex-1 w-full px-4 flex flex-col gap-4'>
							{	appointments.map((cita) => {
								const matchedEvent = dataEvent.find(
            			(e) => e.eventType?.slug === cita.slug
         				);

								return (
									<PendingShifts
										key={cita.id}
										cita={cita}
										event={matchedEvent}
										setAppointments={setAppointments}
									/>
								)
							})}
						</div>
					) : (
						<div className='p-4 flex flex-col items-center gap-4'>
							<p className='text-center text-3xl font-bold text-blue-600'>
								No tienes citas pendientes
							</p>
							<img src='/src/assets/relax-home.svg' alt='SVG de espera' />
						</div>
					)}
				</section>
			</article>

			<section className='fixed bottom-0 w-full h-14'>
				<NavBar />
			</section>
		</main>
	)
}

export default ViewAppointment
