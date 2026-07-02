import NavBar from '@components/NavBar.jsx'
import CardClientsStatus from '@components/viewAppointment/cards/CardClientsStatus'
import PendingShifts from '../components/viewAppointment/cards/PendingShifts.jsx'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import {
	bookingEvent,
	getNameEvent,
	GetBookingsStatus,
	GetBookingsStatusAdmin,
} from '../utils/Bookings.js'
import { useUser } from '@clerk/react'
// import { useIsOwner } from '../hooks/useIsOwner.js'
import { checkRole } from '../utils/UserCheckRol.js'
import HeaderPage from './HeaderPage.jsx'
import {
	IconFilter,
	IconChevronDown,
	IconChevronRight,
	IconChevronLeft,
} from '@tabler/icons-react'

function ViewAppointment() {
	const navigate = useNavigate()

	const [appointments, setAppointments] = useState([])
	const [appointmentsUser, setAppointmentsUser] = useState([])
	const [allAppointments, setAllAppointments] = useState([])
	const [allAppointmentsUser, setAllAppointmentsUser] = useState([])
	const [isAdmin, setIsAdmin] = useState(false)
	const [dataEvent, setDataEvent] = useState([])
	const [filterStatus, setFilterStatus] = useState('all')
	const [loading, setLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const { user } = useUser()

	useEffect(() => {
		const verifyRole = async () => {
			if (!user?.id) return

			const isOwner = await checkRole(user.id)
			setIsAdmin(isOwner)
		}

		verifyRole()
	}, [user])

	const loadAllData = async () => {
		setLoading(true) // Aseguramos que empiece en true
		try {
			const [booking, events] = await Promise.all([
				bookingEvent(),
				getNameEvent(),
			])

			setAppointments(booking)
			if (events) setDataEvent(events)
		} catch (error) {
			console.error('Error cargando datos:', error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		loadAllData()
	}, [])

	useEffect(() => {
		setCurrentPage(1)
	}, [filterStatus, isAdmin])

	useEffect(() => {
		if (!user?.primaryEmailAddress?.emailAddress) return

		const loadBookings = async () => {
			setLoading(true)

			try {
				if (isAdmin) {
					const [currentBookings, allBookings] = await Promise.all([
						GetBookingsStatusAdmin(filterStatus),
						filterStatus === 'all'
							? Promise.resolve([])
							: GetBookingsStatusAdmin('all'),
					])

					setAppointments(currentBookings || [])
					setAllAppointments(
						filterStatus === 'all' ? currentBookings || [] : allBookings || [],
					)
				} else {
					const [currentBookings, allBookings] = await Promise.all([
						GetBookingsStatus(
							user.primaryEmailAddress.emailAddress,
							filterStatus,
						),
						filterStatus === 'all'
							? Promise.resolve([])
							: GetBookingsStatus(user.primaryEmailAddress.emailAddress, 'all'),
					])

					setAppointmentsUser(currentBookings || [])
					setAllAppointmentsUser(
						filterStatus === 'all' ? currentBookings || [] : allBookings || [],
					)
				}
			} catch (error) {
				console.error('Error cargando citas:', error)
			} finally {
				setLoading(false)
			}
		}

		loadBookings()
	}, [filterStatus, user, isAdmin])

	const appointmentsToShow = isAdmin ? appointments : appointmentsUser
	const allCurrentAppointments = isAdmin ? allAppointments : allAppointmentsUser

	const totalCount = allCurrentAppointments.length
	const upcomingCount = allCurrentAppointments.filter(
		(cita) => cita.status !== 'cancelled' && cita.status !== 'rejected',
	).length
	const cancelledCount = allCurrentAppointments.filter(
		(cita) => cita.status === 'cancelled',
	).length

	const itemsPerPage = 5
	const totalPages = Math.ceil(appointmentsToShow.length / itemsPerPage)
	const paginatedAppointments = appointmentsToShow.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage,
	)

	return (
		<main className='relative bg-[#141419] min-h-screen flex flex-col overflow-hidden pb-20'>
			<div className='pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.09),transparent_60%)]' />
			<div className='pointer-events-none fixed top-[-12%] left-1/2 -translate-x-1/2 h-[560px] w-[780px] rounded-full bg-blue-500/[0.1] blur-[170px] animate-[pulseSoft_9s_ease-in-out_infinite]' />
			<div className='pointer-events-none fixed bottom-0 -right-20 h-[400px] w-[400px] rounded-full bg-[#e3b869]/[0.06] blur-[150px]' />

			<div className='relative z-10'>
				<HeaderPage path='/inicio' name='Tus Citas' />
			</div>

			<article className='relative z-10 grid grid-cols-3 gap-4 p-4'>
				<CardClientsStatus title='Totales' count={totalCount} style='totals' />
				<CardClientsStatus
					title='Aceptadas'
					count={upcomingCount}
					style='served'
				/>
				<CardClientsStatus title='Canceladas' count={cancelledCount} />{' '}
			</article>

			<article className='relative z-10 flex-1 flex flex-col'>
				<h2 className='text-xl px-4 font-bold uppercase my-8 relative overflow-hidden'>
					<div className='pointer-events-none absolute inset-y-0 left-4 flex items-center pl-4 text-[#e3b869]'>
						<IconFilter stroke={2} />
					</div>

					<select
						name='select-turn-filter'
						value={filterStatus}
						className='
							w-full appearance-none bg-white/[0.05] backdrop-blur-xl
							font-bold
							text-white/85 border border-white/[0.14]
							rounded-2xl pl-12 pr-10 py-3.5 text-base
						  shadow-[0_10px_30px_rgba(0,0,0,0.35)]
							cursor-pointer transition-all duration-200
							focus:border-[#e3b869]/40 focus:outline-none
							hover:border-white/[0.22]'
						id='select-turn-filter'
						onChange={(e) => {
							setFilterStatus(e.target.value)
						}}
					>
						<option value='all'>Turnos totales</option>
						<option value='upcoming'>Turnos confirmados</option>
						<option value='cancelled'>Turnos cancelados</option>
					</select>

					<div className='pointer-events-none absolute inset-y-0 right-4 flex items-center pr-4 text-white/30'>
						<IconChevronDown stroke={2} />
					</div>
				</h2>
				<section className='flex-1 flex flex-col items-center justify-center'>
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
								className='animate-spin stroke-[#e3b869]'
								viewBox='0 0 24 24'
							>
								<path fill='none' stroke='none' d='M0 0h24v24H0z' />
								<path d='M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5' />
							</svg>
							<p className='text-center animate-pulse text-xl font-bold text-white/60'>
								Cargando...
							</p>
						</div>
					) : paginatedAppointments.length > 0 ? (
						<div className='flex-1 w-full px-4 flex flex-col gap-4'>
							{paginatedAppointments.map((appointment) => {
								const matchedEvent = dataEvent.find(
									(e) => e.slug === appointment.eventType?.slug,
								)

								return (
									<PendingShifts
										key={appointment.id}
										appointment={appointment}
										event={matchedEvent}
										setAppointments={setAppointments}
									/>
								)
							})}
						</div>
					) : (
						<div className='p-4 flex flex-col items-center gap-4'>
							<p className='text-center text-3xl font-bold text-[#e3b869]'>
								No tienes citas pendientes
							</p>
							<img src='/src/assets/relax-home.svg' alt='SVG de espera' />
						</div>
					)}
				</section>
			</article>

			{/* Paginación */}
			{totalPages > 1 && (
				<section className='relative z-10 flex overflow-hidden justify-center items-center gap-2 p-4 bg-white/[0.03] border-t border-white/[0.1]'>
					<button
						onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
						disabled={currentPage === 1}
						className='px-4 py-2 bg-white/[0.06] border border-white/[0.14] text-white/70 rounded-lg disabled:bg-white/[0.02] disabled:text-white/20 disabled:cursor-not-allowed hover:bg-white/[0.1] transition-colors'
					>
						<IconChevronLeft stroke={2} />
					</button>

					<div className='flex overflow-x-auto py-2 gap-2'>
						{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
							<button
								key={page}
								onClick={() => setCurrentPage(page)}
								className={`px-3 py-2 rounded-lg transition-colors border ${
									currentPage === page
										? 'bg-[#e3b869]/15 border-[#e3b869]/40 text-[#e3b869]'
										: 'bg-white/[0.04] border-white/[0.1] text-white/50 hover:bg-white/[0.08]'
								}`}
							>
								{page}
							</button>
						))}
					</div>

					<button
						onClick={() =>
							setCurrentPage((prev) => Math.min(prev + 1, totalPages))
						}
						disabled={currentPage === totalPages}
						className='px-4 py-2 bg-white/[0.06] border border-white/[0.14] text-white/70 rounded-lg disabled:bg-white/[0.02] disabled:text-white/20 disabled:cursor-not-allowed hover:bg-white/[0.1] transition-colors'
					>
						<IconChevronRight stroke={2} />
					</button>
				</section>
			)}

			<section className='fixed bottom-0 w-full px-5 z-20'>
				<NavBar />
			</section>
		</main>
	)
}

export default ViewAppointment
