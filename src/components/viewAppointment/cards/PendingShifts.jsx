import { useState } from 'react'
import EditAppointment from '../../modal/EditAppointment'
import { formatDate, cancelBooking2 } from '../../../utils/Bookings'
import { Clock, User, Edit3 } from 'lucide-react'

function PendingShifts({ setAppointments, cita, event }) {
	const [isOpen, setIsOpen] = useState(false)

	const getPriceFromDescription = (description) => {
		const match = description?.match(/\$(\d+)/)
		return match ? Number(match[1]) : null
	}

	return (
		<article
			key={cita.id}
			className='bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden transition-all hover:border-blue-300 group'
		>
			{/* Encabezado de la Tarjeta */}
			<section className='bg-blue-600 px-5 py-3 flex justify-between items-center group-hover:bg-blue-700 transition-colors'>
				<div className='flex items-center gap-2'>
					<div className='w-8 h-8 rounded-full bg-blue-400/30 flex items-center justify-center border border-blue-400/20'>
						<User className='w-4 h-4 text-white' />
					</div>
					<span className='text-white font-semibold text-sm'>
						{cita.attendees?.[0]?.name || 'Sin nombre'}
					</span>
				</div>
				<div className='flex items-center gap-1.5 text-blue-50 text-xs font-medium bg-blue-500/30 px-2 py-1 rounded-lg'>
					<Clock className='w-3.5 h-3.5' />
					<span>
						{/* {cita.fecha}, {cita.hora} */}
						{formatDate(cita.start)}
					</span>
				</div>
			</section>

			{/* Cuerpo de la Tarjeta */}
			<section className='p-5 space-y-5'>
				<div className='flex justify-between items-start'>
					<div>
						<p className='text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1'>
							Servicio contratado
						</p>
						<h3 className='text-lg font-extrabold text-slate-800 leading-none'>
							{event?.title || cita.eventType?.name || 'Servicio no disponible'}
						</h3>
					</div>
					<div className={`${cita.status == "cancelled" ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}  text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-tighter flex items-center gap-1 `}>
						<div className={`w-1.5 h-1.5 ${ cita.status == "cancelled" ? 'bg-red-500' : 'bg-emerald-500'} rounded-full animate-pulse`}></div>
						{cita.status}
					</div>
				</div>

				<div className='flex items-center justify-between pt-2'>
					<div className='flex flex-col'>
						<p className='text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5'>
							Precio total
						</p>
						<span className='text-2xl font-black text-slate-900 tracking-tight'>
							{getPriceFromDescription(event?.description)}
						</span>
					</div>

					<button onClick={() => setIsOpen(!isOpen)} className='flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white px-5 py-2.5 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-slate-200 transform active:scale-95 group'>
						<Edit3 className='w-4 h-4' />
						Editar
					</button>
				</div>
			</section>

				<EditAppointment
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					onCancel={(uid) => cancelBooking2(uid, setAppointments)}
					cita={cita}
					time='12:23'
		 		/>
		</article>
	)
}

export default PendingShifts
