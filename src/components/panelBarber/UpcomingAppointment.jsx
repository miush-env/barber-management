import CardUpcomingAppointment from './cards/CardUpcomingAppointment'
import { NavLink } from 'react-router'

function UpcomingAppointment({ appointments }) {
	return (
		<article className='px-6 pt-6 flex flex-col gap-3'>
			<div className='flex justify-between items-center'>
				<div className='flex items-center gap-2'>
					<span className='h-1.5 w-1.5 rounded-full bg-white/25' />
					<h2 className='text-white/35 uppercase text-xs font-bold tracking-widest'>
						Próximas Citas
					</h2>
				</div>

				<NavLink to='/ver-citas' end>
					<span className='text-xs text-[#e3b869] font-bold underline-offset-4 active:underline hover:underline'>
						Ver todas
					</span>
				</NavLink>
			</div>
			<div className='flex flex-col gap-3'>
				{appointments.length === 0 && (
					<div className='flex flex-col items-center gap-2 py-12 rounded-2xl border border-dashed border-white/[0.14] bg-white/[0.02]'>
						<span className='text-sm font-semibold text-white/40'>
							No tienes citas pendientes aun
						</span>
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
