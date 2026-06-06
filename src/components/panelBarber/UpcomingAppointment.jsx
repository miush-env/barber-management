import CardUpcomingAppointment from './cards/CardUpcomingAppointment'
import { NavLink } from 'react-router'

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
				{appointments.map((client) => (
					<CardUpcomingAppointment key={client.id} appointment={client} />
				))}
			</div>
		</article>
	)
}

export default UpcomingAppointment
