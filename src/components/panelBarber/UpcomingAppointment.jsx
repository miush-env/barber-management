import CardUpcomingAppointment from './cards/CardUpcomingAppointment'
import { NavLink } from 'react-router'
import { IconPlus } from '@tabler/icons-react'

function UpcomingAppointment({ appointments }) {
	return (
		<article className='px-6 flex flex-col gap-3'>
			<div className='flex justify-between items-center'>
				<h2 className='text-gray-600 uppercase text-sm font-bold'>
					Próximas Citas
				</h2>

				<NavLink to='/ver-citas' end>
					<span className='text-sm text-blue-500 font-bold underline-offset-2 active:underline hover:underline'>
						Ver todas
					</span>
				</NavLink>
			</div>
			<div className='flex flex-col gap-4'>
				{appointments.length === 0 && (
					<div className='flex flex-col items-center gap-2 py-10'>
						<span className='text-lg font-semibold'>
							No tienes citas pendientes aun
						</span>
						<div className='flex gap-1 items-center bg-blue-300/60 text-blue-500 p-3 rounded-full active:bg-blue-300/80 cursor-pointer'>
							<IconPlus stroke={3} />
							<NavLink to='/crear-cita' className='font-bold'>
								Agendar una Cita
							</NavLink>
						</div>
					</div>
				)}

				{appointments.map((client) => (
					<CardUpcomingAppointment key={client.id} appointment={client} />
				))}
			</div>
		</article>
	)
}

export default UpcomingAppointment
