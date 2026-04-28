import NavBar from '@components/NavBar.jsx'
import CardClientsStatus from '@components/viewAppointment/cards/CardClientsStatus'
import PendingShifts from '../components/viewAppointment/cards/PendingShifts.jsx'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { bookingEvent, getNameEvent, GetBookingsStatus, GetBookingsStatusAdmin } from '../utils/Bookings.js'
import { ChevronLeft } from 'lucide-react'
import { useUser } from '@clerk/react'

function ViewAppointment() {
	const navigate = useNavigate()

	const [appointments, setAppointments] = useState([])
	const [appointmentsUser, setAppointmentsUser] = useState([])
	const [isAdmin, setIsAdmin] = useState(false)
	const [ dataEvent, setDataEvent ] = useState([])
	const [filterStatus, setFilterStatus] = useState('all')
	const [loading, setLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const {user} = useUser()

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

	useEffect(() => {
		loadAllData();
	}, [])

	useEffect(() => {
		setCurrentPage(1)
	}, [filterStatus, isAdmin])

	useEffect(() => {
		if (!user?.primaryEmailAddress?.emailAddress) return;

		const loadBookings = async () => {
			setLoading(true);

			try {
				if (isAdmin) {
					const resApiCal = await GetBookingsStatusAdmin(filterStatus)
					setAppointments(resApiCal || [])
				} else {
					const resApiCal = await GetBookingsStatus(
						user.primaryEmailAddress.emailAddress,
						filterStatus,
					)
					setAppointmentsUser(resApiCal || [])
				}
			} catch (error) {
				console.error('Error cargando citas:', error)
			} finally {
				setLoading(false);
			}
		};

		loadBookings();
	}, [filterStatus, user, isAdmin]);

	const appointmentsToShow = isAdmin ? appointments : appointmentsUser

	const itemsPerPage = 5
	const totalPages = Math.ceil(appointmentsToShow.length / itemsPerPage)
	const paginatedAppointments = appointmentsToShow.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	)

	return (
		<main className='bg-gray-50 min-h-screen flex flex-col pb-20'>
			<header className='flex items-center p-4 border-b border-gray-300 bg-white'>
				<button
					className='p-1 active:bg-slate-200 rounded-full transition-colors'
					onClick={() => {
						navigate('/inicio')
				}}
				>
					<ChevronLeft className="w-6 h-6 text-slate-600" />
				</button>
				<h1 className='text-xl font-bold text-slate-800 text-center flex-1'>Tus Citas</h1>
			</header>

			<article className='grid grid-cols-3 gap-4 p-4'>
				<CardClientsStatus title='Totales' value='13' style='totals' />
				<CardClientsStatus title='Confirmadas' value='7' style='served' />
				<CardClientsStatus title='Cancelados' value='3' />
			</article>

			<article className='flex-1 flex flex-col'>
				<h2 className='text-xl pl-4 font-bold uppercase my-8'>
					<select name="select-turn-filter" value={filterStatus} onChange={(e)=>{ setFilterStatus(e.target.value)}}>
						<option value="all">Turnos totales</option>
						<option value="upcoming">Turnos confirmados</option>
						<option value="cancelled">Turnos cancelados</option>
					</select>
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
					) : paginatedAppointments.length > 0 ? (
						<div className='flex-1 w-full px-4 flex flex-col gap-4'>
							{	paginatedAppointments.map((cita) => {
								const matchedEvent = dataEvent.find(
            			(e) => e.slug === cita.eventType?.slug
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

			{/* Paginación */}
			{totalPages > 1 && (
				<section className='flex justify-center items-center gap-2 p-4 bg-white border-t border-gray-200'>
					<button
						onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
						disabled={currentPage === 1}
						className='px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors'
					>
						Anterior
					</button>
					
					{Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
						<button
							key={page}
							onClick={() => setCurrentPage(page)}
							className={`px-3 py-2 rounded-lg transition-colors ${
								currentPage === page
									? 'bg-blue-600 text-white'
									: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
							}`}
						>
							{page}
						</button>
					))}
					
					<button
						onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
						disabled={currentPage === totalPages}
						className='px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors'
					>
						Siguiente
					</button>
				</section>
			)}

			<section className='fixed bottom-0 w-full px-5'>
				<NavBar />
			</section>
		</main>
	)
}

export default ViewAppointment

