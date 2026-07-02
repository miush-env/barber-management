import CardNextAppointment from './cards/CardNextAppointment'
import { NavLink } from 'react-router'
import { IconPlus } from '@tabler/icons-react'

function NextAppointment({ appointment }) {
	return (
		<article className='px-6 pt-8 pb-3 flex flex-col gap-3'>
			<div className='flex items-center gap-2'>
				<span className='h-1.5 w-1.5 rounded-full bg-[#e3b869]/70' />
				<h2 className='text-white/35 uppercase text-xs font-bold tracking-widest'>
					Cita Actual
				</h2>
			</div>
			<div>
				{appointment === null ? (
					<div className='relative overflow-hidden rounded-2xl border border-white/[0.16] bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent backdrop-blur-xl p-8 flex flex-col items-center gap-4 text-center shadow-[0_10px_30px_rgba(0,0,0,0.4),0_0_20px_rgba(255,255,255,0.04)]'>
						<p className='text-white/35 text-sm'>
							No tienes citas programadas
						</p>
						<div className='flex gap-1.5 items-center bg-white/[0.06] border border-[#e3b869]/25 text-[#e3b869] px-4 py-2.5 rounded-full active:bg-white/[0.1] hover:bg-white/[0.1] cursor-pointer transition-all'>
							<IconPlus stroke={3} size={16} />
							<NavLink to='/crear-cita' className='font-bold text-sm'>
								Agendar una Cita
							</NavLink>
						</div>
					</div>
				) : (
					<CardNextAppointment appointment={appointment} />
				)}
			</div>
		</article>
	)
}

export default NextAppointment
