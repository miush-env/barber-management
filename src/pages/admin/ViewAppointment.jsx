import NavBar from '@components/NavBar.jsx'
import CardClientsStatus from '@components/viewAppointment/cards/CardClientsStatus'
import PendingShifts from '../../components/viewAppointment/cards/PendingShifts.jsx'

function ViewAppointment() {
	return (
		<main className='bg-white min-h-screen pb-20'>
			<header className='flex items-center p-4 border-b border-gray-500 bg-white'>
				<span className=''>
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

			<article >
				<h2 className='text-xl pl-4 font-bold uppercase my-8'>
					Turnos pendientes
				</h2>
				<section>
					<PendingShifts
						service='Corte clásico'
						time='Viernes, 7 Mar - 11:40'
						status={true}
						barber='Juan Perez'
						price={10000}
					/>
					<PendingShifts
						service='Corte clásico'
						time='Viernes, 7 Mar - 11:40'
						status={false}
						barber='Juan Perez'
						price={10000}
					/>
					<PendingShifts
						service='Corte clásico'
						time='Viernes, 7 Mar - 11:40'
						status={false}
						barber='Juan Perez'
						price={10000}
					/>
					<PendingShifts
						service='Corte clásico'
						time='Viernes, 7 Mar - 11:40'
						status={true}
						barber='Juan Perez'
						price={10000}
					/>
					<PendingShifts
						service='Corte clásico'
						time='Viernes, 7 Mar - 11:40'
						status={false}
						barber='Juan Perez'
						price={10000}
					/>
				</section>
			</article>

			<NavBar />
		</main>
	)
}

export default ViewAppointment
