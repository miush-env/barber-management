import { useState } from 'react'
import EditAppointment from '../../modal/EditAppointment'
import { formatDate, cancelBooking2 } from '../../../utils/Bookings'
import {
	IconCalendarFilled,
	IconTag,
	IconUser,
	IconSettings,
} from '@tabler/icons-react'

import { Services } from '../../../utils/services'

function PendingShifts({ setAppointments, appointment, event }) {
	const [isOpen, setIsOpen] = useState(false)

	const canEditBooking = (date) => {
		const now = new Date()
		const bookingDate = new Date(date)

		const oneHourInMs = 60 * 60 * 1000

		return now.getTime() < bookingDate.getTime() + oneHourInMs
	}

	return (
		<article
			key={appointment.id}
			className={`bg-white border-l-4 ${appointment.status === 'cancelled' ? 'border-red-500' : 'border-green-500'} rounded-lg p-4 shadow-md flex flex-col gap-2`}
		>
			<section className='flex items-center justify-between mb-1'>
				<div className='flex gap-2 items-center text-sm text-gray-500 font-bold'>
					<IconCalendarFilled color='#155dfc' />
					<span>{formatDate(appointment.start)}</span>
				</div>
				<span
					className={`flex items-center gap-1 font-bold text-sm ${appointment?.status === 'accepted' ? 'bg-green-100' : 'bg-red-100'} px-2 py-1 rounded-full`}
				>
					<span
						className={`w-2 h-2 rounded-full ${appointment.status === 'cancelled' ? 'bg-red-500' : 'bg-green-500'}`}
					></span>
					{appointment.status === 'cancelled' ? 'Cancelado' : 'Aceptado'}
				</span>
			</section>

			<span className='text-2xl font-bold my-1'>
				{event?.title ||
					appointment.eventType?.name ||
					'Servicio no disponible'}
			</span>

			<section className='w-full'>
				<div className='bg-gray-200 rounded-full h-0.5 w-full'></div>

				<section className='flex justify-between'>
					<div className='flex-col justify-between items-center '>
						<div className='flex items-center gap-2 mt-2'>
							<div className='p-2 bg-blue-300/60 rounded-md'>
								<IconTag size={20} color='#155dfc' />
							</div>
							<div>
								<h4 className='text-sm font-semibold text-gray-500'>
									Precio total
								</h4>
								<span className='font-bold'>
									{Services[appointment.eventType.id]?.price}
								</span>
							</div>
						</div>
						<div className='flex items-center gap-2 mt-2'>
							<div className='p-2 bg-blue-300/60 rounded-md'>
								<IconUser size={20} color='#155dfc' />
							</div>
							<div>
								<h4 className='text-sm font-semibold text-gray-500'>Cliente</h4>
								<span className='font-bold'>
									{appointment.attendees?.[0]?.name || 'Sin nombre'}
								</span>
							</div>
						</div>
					</div>

					<div className='flex items-center justify-center'>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className={`flex items-center gap-2 bg-blue-100 active:bg-blue-600 hover:bg-blue-600 text-blue-600 active:text-white p-3 rounded-full font-bold text-sm transition-all transform active:scale-95 ${
								appointment.status === 'cancelled' ||
								!canEditBooking(appointment.start)
									? 'hidden'
									: ''
							}`}
						>
							<IconSettings stroke={2} />
						</button>
					</div>
				</section>
			</section>

			<EditAppointment
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				onCancel={(uid) => cancelBooking2(uid, setAppointments)}
				cita={appointment}
			/>
		</article>
	)
}

export default PendingShifts
