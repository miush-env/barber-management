import { useState } from 'react'
import EditAppointment from '../../modal/EditAppointment'
import { formatDate, cancelBooking2 } from '../../../utils/Bookings'

function PendingShifts({ setAppointments, cita, event }) {
	const [isOpen, setIsOpen] = useState(false)
	const getPriceFromDescription = (description) => {
		const match = description.match(/\$(\d+)/);
		return match ? Number(match[1]) : null;
  };

	return (
		<article className='bg-linear-to-r from-blue-500 to-blue-600 rounded-2xl p-[2px]'>
			<div className='bg-white rounded-2xl overflow-hidden flex flex-col h-40'>
				<section className='flex justify-between items-center px-4 py-2 bg-linear-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-t-2xl'>
					<span>{cita.attendees?.[0]?.name || 'Sin nombre'}</span>
					<span>{formatDate(cita.start)}</span>
				</section>

				<section className='flex-1 flex flex-col justify-between items-center px-4'>
					<div className='flex justify-between w-full flex-1 items-center'>
						<h3 className='font-semibold text-lg uppercase'>{event.title}</h3>

						<span className={`text-sm ${cita.status === 'accepted' ? 'bg-green-300 text-green-800' : 'bg-red-300 text-red-800'} uppercase font-semibold rounded-xl p-[6px]`}>
							{cita.status === 'accepted' ? 'Confirmada' : 'Cancelada'}
						</span>
					</div>

					<div className='flex justify-between w-full flex-1 items-center'>
						<span className='text-xl font-bold'>${getPriceFromDescription(event.description)}</span>

						<div className=''>
							<button
								onClick={() => setIsOpen(!isOpen)}
								className='bg-blue-500 font-semibold text-white px-3 py-1 rounded-full '
							>
								Editar
							</button>
						</div>
					</div>
				</section>
			</div>

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
