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

	const canEditBooking = (date) => {
		const now = new Date()
		const bookingDate = new Date(date)

		const oneHourInMs = 60 * 60 * 1000

		return now.getTime() < bookingDate.getTime() + oneHourInMs
	}

	return (
		<article
			key={cita.id}
			className='bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden transition-all hover:border-blue-300 group'
		>
			{/* Encabezado de la Tarjeta */}

			{cita.attendees?.[0]?.name || 'Sin nombre'}
			{formatDate(cita.start)}
			{event?.title || cita.eventType?.name || 'Servicio no disponible'}
			{cita.status}
			{getPriceFromDescription(event?.description)}

			<EditAppointment
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				onCancel={(uid) => cancelBooking2(uid, setAppointments)}
				cita={cita}
			/>
		</article>
	)
}

export default PendingShifts
