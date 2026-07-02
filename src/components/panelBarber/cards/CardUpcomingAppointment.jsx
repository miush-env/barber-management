import { ChevronRight } from 'lucide-react'
// import EditAppointment from "../../modal/EditAppointment";
import { useState } from 'react'
import { cancelBooking } from '../../../utils/Bookings'
import EditAppointmentPanel from '../../modal/EditAppointmentPanel'
import { Dialog, DialogTrigger, DialogContent } from '@components/ui/dialog'
import { getService } from '../../../utils/services'

function CardUpcomingAppointment({ appointment }) {
	const hour = new Date(appointment.start)
		.toLocaleTimeString('es-AR', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
		})
		.slice(0, 5)

	const period = new Date(appointment.start).getHours() < 12 ? 'AM' : 'PM'
	const [isOpen, setIsOpen] = useState(false)

	const comparisonSlugService = getService(appointment?.eventTypeId)

	return (
		<div
			className='group flex items-center justify-between p-3.5 rounded-2xl transition-all active:scale-[0.98] cursor-pointer
                 bg-white/[0.04] border border-white/[0.14] backdrop-blur-xl shadow-[0_4px_18px_rgba(0,0,0,0.3),0_0_16px_rgba(255,255,255,0.03)] hover:border-[#e3b869]/25 hover:bg-white/[0.06] active:border-[#e3b869]/25'
			onClick={() => setIsOpen(!isOpen)}
		>
			<div className='flex items-center gap-4'>
				<div className='flex flex-col items-center min-w-[50px] py-1 border-r border-white/[0.08]'>
					<span className='text-sm font-bold text-[#e3b869]'>{hour}</span>
					<span className='text-[10px] uppercase text-white/25 font-medium'>
						{period}
					</span>
				</div>

				<div>
					<h4 className='text-sm font-semibold text-white/85'>
						{appointment.bookingFieldsResponses.name}
					</h4>
					<div className='flex items-center gap-2'>
						<span className='text-[11px] text-white/35'>
							{comparisonSlugService
								? comparisonSlugService.name
								: 'Servicio Desconocido'}
						</span>
						<span className='text-[10px] opacity-25 text-white'>•</span>
						<span
							className={`text-[10px] font-bold uppercase tracking-wider ${
								appointment.status === 'accepted'
									? 'text-emerald-400/90'
									: 'text-rose-400/90'
							}`}
						>
							{appointment.status === 'accepted' ? 'Aceptado' : 'Cancelado'}
						</span>
					</div>
				</div>
			</div>

			<div className='flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.04] group-hover:bg-[#e3b869]/10 group-active:bg-[#e3b869]/10 transition-colors'>
				<ChevronRight
					size={14}
					className='text-white/35 group-active:text-[#e3b869] group-hover:text-[#e3b869]'
				/>
			</div>

			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent className='' showCloseButton={false}>
					<EditAppointmentPanel
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						onCancel={(uid) => cancelBooking(uid)}
						cita={appointment}
					/>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default CardUpcomingAppointment
