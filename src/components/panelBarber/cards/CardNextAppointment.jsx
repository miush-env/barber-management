import EditAppointment from '@components/modal/EditAppointment.jsx'
import { useState } from 'react'
import { cancelBooking } from '../../../utils/Bookings'
import { Edit3 } from 'lucide-react'
import { getService } from '../../../utils/services.js'
import { IconScissors, IconTag, IconSettings } from '@tabler/icons-react'

function CardNextAppointment({ appointment }) {
	let statusStyle = ''
	let dotColor = ''

	const [isOpen, setIsOpen] = useState(false)

	if (appointment?.status === 'accepted') {
		statusStyle = 'text-green-700'
		dotColor = 'bg-green-500'
	} else if (appointment?.status === 'cancelled') {
		statusStyle = 'text-red-700'
		dotColor = 'bg-red-500'
	}

	const comparisonSlugService = getService(appointment?.eventTypeId)

	return (
		<article className='bg-white h-46 border-l-4 border-2 border-slate-300/50 border-l-blue-500 shadow-md shadow-slate-200 rounded-xl p-4'>
			<section className='flex justify-between items-start border-b border-gray-300 py-2'>
				<div className='flex items-center justify-between w-full'>
					<span className='text-3xl font-bold text-blue-700'>
						{new Date(appointment?.start).toLocaleTimeString('es-AR', {
							hour: '2-digit',
							minute: '2-digit',
							hour12: false,
						})}
					</span>

					<span
						className={`flex items-center gap-1 font-bold text-sm ${statusStyle} ${appointment?.status === 'accepted' ? 'bg-green-100' : 'bg-red-100'} px-2 py-1 rounded-full`}
					>
						<span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
						{appointment?.status === 'accepted' ? 'Aceptado' : 'Cancelado'}
					</span>
				</div>
			</section>

			<section className='mt-3  flex justify-between items-center'>
				<div className='flex flex-col gap-1 text-sm'>
					<h3 className='text-lg text-gray-900 font-bold'>
						{appointment?.bookingFieldsResponses?.name ||
							'Cliente no especificado'}
					</h3>

					<div className='flex items-center gap-1'>
						<IconScissors size={18} color='#6a7282' />
						<span className='text-gray-600 text-sm font-semibold'>
							{comparisonSlugService.name || 'Servicio no especificado'}
						</span>
					</div>

					<div className='flex items-center gap-1 text-blue-600 '>
						<IconTag size={18} />
						<span className='font-bold text-sm'>
							{comparisonSlugService.price}
						</span>
					</div>
				</div>

				<button
					onClick={() => setIsOpen(!isOpen)}
					className='flex items-center gap-2 bg-blue-100 active:bg-blue-600 hover:bg-blue-600 text-blue-600 active:text-white p-3 rounded-full font-bold text-sm transition-all transform active:scale-95'
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
