import EditAppointment from '@components/modal/EditAppointment.jsx'
import { useState } from 'react'
import { cancelBooking } from '../../../utils/Bookings'
import { getService } from '../../../utils/services.js'
import { IconScissors, IconTag, IconSettings } from '@tabler/icons-react'

function CardNextAppointment({ appointment }) {
	let statusStyle = ''
	let dotColor = ''

	const [isOpen, setIsOpen] = useState(false)

	const isAccepted = appointment?.status === 'accepted'

	if (isAccepted) {
		statusStyle = 'text-emerald-300/90 bg-emerald-400/[0.08] border-emerald-400/15'
		dotColor = 'bg-emerald-400/90'
	} else if (appointment?.status === 'cancelled') {
		statusStyle = 'text-rose-300/90 bg-rose-400/[0.08] border-rose-400/15'
		dotColor = 'bg-rose-400/90'
	}

	const comparisonSlugService = getService(appointment?.eventTypeId)

	return (
		<article className='relative overflow-hidden rounded-2xl border border-white/[0.16] bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.4),0_0_20px_rgba(255,255,255,0.04)] p-5'>
			<div className='absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#e3b869]/50 via-[#e3b869]/10 to-transparent' />

			<section className='relative flex justify-between items-start border-b border-white/[0.1] pb-3'>
				<div className='flex items-center justify-between w-full'>
					<span className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70'>
						{new Date(appointment?.start).toLocaleTimeString('es-AR', {
							hour: '2-digit',
							minute: '2-digit',
							hour12: false,
						})}
					</span>

					<span
						className={`flex items-center gap-1.5 font-bold text-xs border px-2.5 py-1 rounded-full ${statusStyle}`}
					>
						<span className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></span>
						{isAccepted ? 'Aceptado' : 'Cancelado'}
					</span>
				</div>
			</section>

			<section className='relative mt-4 flex justify-between items-center'>
				<div className='flex flex-col gap-1.5 text-sm'>
					<h3 className='text-lg text-white/90 font-bold'>
						{appointment?.bookingFieldsResponses?.name ||
							'Cliente no especificado'}
					</h3>

					<div className='flex items-center gap-1.5'>
						<IconScissors size={16} className='text-white/35' />
						<span className='text-white/55 text-sm font-medium'>
							{comparisonSlugService.name || 'Servicio no especificado'}
						</span>
					</div>

					<div className='flex items-center gap-1.5 text-[#e3b869] drop-shadow-[0_0_6px_rgba(227,184,105,0.3)]'>
						<IconTag size={16} />
						<span className='font-bold text-sm'>
							{comparisonSlugService.price}
						</span>
					</div>
				</div>

				<button
					onClick={() => setIsOpen(!isOpen)}
					className='flex items-center gap-2 bg-white/[0.06] border border-white/[0.16] active:bg-white/[0.12] hover:bg-white/[0.12] hover:border-[#e3b869]/25 text-white/60 p-3 rounded-full font-bold text-sm transition-all transform active:scale-95'
				>
					<IconSettings stroke={2} />
				</button>
			</section>

			<EditAppointment
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				onCancel={(uid) => cancelBooking(uid)}
				cita={appointment}
			/>
		</article>
	)
}

export default CardNextAppointment
