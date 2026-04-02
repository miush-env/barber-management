import { useState } from 'react'
import EditAppointment from '../../modal/EditAppointment'
import { formatDate, cancelBooking2 } from '../../../utils/Bookings'

function PendingShifts({ status, setAppointments, cita }) {
	const [isOpen, setIsOpen] = useState(false)
	console.log('la cita actual es:',cita)
	
	return (
		<article className={`${cita.status === 'accepted' ? 'bg-green-500' : 'bg-red-500' }bg-blue-500 rounded-2xl flex flex-col h-40`}>
			<section className='flex-1 flex justify-between items-center px-4'>
				<span>{cita.attendees?.[0]?.name || 'Sin nombre'}</span>
				<span>{formatDate(cita.start)}</span>
			</section>
			<section className='flex-2 bg-gray-100 rounded-2xl px-4 flex justify-between items-center'>
				<div>
					<h3>{cita.eventType.slug}</h3>
					<span>
						
						{status ? 'Confirmada' : 'Cancelada'}
					</span>
				</div>
				<div>
					<span>15000</span>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className=' bg-blue-600/90 p-2 rounded-lg'
					>
						<img src='./src/assets/edit.svg' alt='icon edit' width={20} />
					</button>
					<EditAppointment
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						onCancel={uid=> cancelBooking2(uid, setAppointments)}
						cita={cita}
						time='12:23'
					/>
				</div>
			</section>
		</article>
	)
}

export default PendingShifts
