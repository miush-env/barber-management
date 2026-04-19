import NavBar from '@components/NavBar.jsx'
import CardClientsStatus from '@components/viewAppointment/cards/CardClientsStatus'
import PendingShifts from '../components/viewAppointment/cards/PendingShifts.jsx'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { bookingEvent, getNameEvent, GetAppointmentsUser, GetBookingsStatus } from '../utils/Bookings.js'
import { ChevronLeft } from 'lucide-react'
import { useUser } from '@clerk/react'

function ViewAppointment() {
	const navigate = useNavigate()

	const [appointments, setAppointments] = useState([])
	const [appointmentsUser, setAppointmentsUser] = useState([])
	const [isAdmin, setIsAdmin] = useState(false)
	const [ dataEvent, setDataEvent ] = useState([])
	const [filterStatus, setFilterStatus] = useState("totals");
	const [loading, setLoading] = useState(true)
	const {user} = useUser()

	const checkAdminRole = async () => {
		try {
			const response = await fetch('http://localhost:3000/api/users/');
			const users = await response.json();

			// Buscar usuario actual por clerkId
			const currentUser = users.find((u) => u.clerkId === user.id);

			if (currentUser && currentUser.role === 'admin') {
				setIsAdmin(true);
				console.log('Sos admin');
			} else {
				setIsAdmin(false);
				console.log('No sos admin');
			}

		} catch (error) {
			console.log('Error al verificar rol:', error);
		}
	};

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

	const userAccount = async () => {
		if (user.primaryEmailAddress.emailAddress) {
			const res = await GetAppointmentsUser(user.primaryEmailAddress.emailAddress)
			setAppointmentsUser(res)
		}
	}
	useEffect(() => {
	  loadAllData();
		userAccount()
	}, [])

	useEffect(() => {
		if (user?.id) {
			checkAdminRole();
			}
	}, [user]);

	useEffect(() => {
		const loadBookings = async () => {
			setLoading(true);
			await GetBookingsStatus(filterStatus, setAppointments);
			setLoading(false);
		};

		loadBookings();
}, [filterStatus]);

	const appointmentsToShow = isAdmin ? appointments : appointmentsUser;

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
						<option value="totals">Turnos totales</option>
						<option value="past">Turnos confirmados</option>
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
					) : appointmentsToShow.length > 0 ? (
						<div className='flex-1 w-full px-4 flex flex-col gap-4'>
							{	appointmentsToShow.map((cita) => {
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

			<section className='fixed bottom-0 w-full px-5'>
				<NavBar />
			</section>
		</main>
	)
}

export default ViewAppointment

