import EditAppointment from '@components/modal/EditAppointment.jsx'
import { useState } from 'react';
import { cancelBooking } from '../../../utils/Bookings';

function CardNextAppointment({
	appointment
}) {
	let statusStyle = "";
  let dotColor = "";

	const [isOpen, setIsOpen] = useState(false)

  if (appointment?.status === "accepted") {
    statusStyle = "text-green-700";
    dotColor = "bg-green-500";
  } else if (appointment?.status === "cancelled") {
    statusStyle = "text-red-700";
    dotColor = "bg-red-500";
  }

	return (
		<article className='bg-white border border-slate-300 shadow-lg shadow-slate-200 rounded-xl p-4 '>
			<section className='flex justify-between items-start border-b border-gray-300  py-2'>
				<div className='flex gap-3'>
					<img
						src='https://i.pinimg.com/736x/01/73/df/0173df79cfd82180c0ccc0ae9eb36836.jpg'
						alt='photo client'
						className='w-11 h-11 object-cover rounded-full'
					/>

					<div className='flex flex-col'>
						<h3 className='text-xl text-gray-900 font-bold'>{appointment?.bookingFieldsResponses?.name || 'Cliente no especificado'}</h3>

						<span
							className={`flex items-center gap-1 text-base font-medium ${statusStyle}`}
						>
							<span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
							{appointment?.status === "accepted" ? 'Aceptado' : 'Cancelado'}
						</span>
					</div>
				</div>

				<div className='flex flex-col items-end leading-none'>
					<span className='text-3xl font-bold text-blue-700'>
						 {new Date(appointment?.start).toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
  })}
					</span>
				</div>
			</section>
			<section className='mt-3  flex justify-between items-center'>
				<div className='flex flex-col text-sm text-gray-600'>
					<span className='text-gray-800 font-bold text-base'>{appointment?.eventType?.slug || 'Servicio no especificado'}</span>

					<span className='font-semibold'>
						{appointment?.duration + ` min`} • ${8000}
					</span>
				</div>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className='flex items-center active:bg-blue-500 justify-center bg-linear-to-tl from-blue-600/90 to-blue-600/70 h-10 w-10 rounded-lg'
				>
					<img src='./src/assets/edit.svg' alt='icon edit' width={20} />
				</button>
			</section>
			<EditAppointment
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				onCancel={(uid) => cancelBooking(uid)}
				cita={appointment}
				time='12:23'
			/>
		</article>
	)
}

export default CardNextAppointment
