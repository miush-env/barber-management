import EditAppointment from '@components/modal/EditAppointment.jsx'
import { useState } from 'react';

function CardNextAppointment({
	nameClient,
	status,
	time,
	serviceName,
	timeService,
	price,
}) {
	let statusStyle = "";
  let dotColor = "";

	const [isOpen, setIsOpen] = useState(false)

  if (status === "confirmada") {
    statusStyle = "text-green-700";
    dotColor = "bg-green-500";
  } else if (status === "cancelada") {
    statusStyle = "text-red-700";
    dotColor = "bg-red-500";
  }

	return (
		<article className='bg-white border border-slate-300 shadow-lg shadow-slate-200 rounded-xl p-4 '>
			<section className='flex justify-between items-start'>
				<div className='flex gap-3'>
					<img
						src='https://i.pinimg.com/736x/01/73/df/0173df79cfd82180c0ccc0ae9eb36836.jpg'
						alt='photo client'
						className='w-11 h-11 object-cover rounded-full'
					/>

					<div className='flex flex-col'>
						<h3 className='text-lg text-gray-900 font-bold'>{nameClient}</h3>

						<span
							className={`flex items-center gap-1 text-base font-medium ${statusStyle}`}
						>
							<span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
							{status}
						</span>
					</div>
				</div>

				<div className='flex flex-col items-end leading-none'>
					<span className='text-3xl font-bold text-gray-900'>{time}</span>
					<span className='text-xs uppercase text-gray-500'>am</span>
				</div>
			</section>
			<section className='mt-3  flex justify-between items-center'>
				<div className='flex flex-col text-sm text-gray-600'>
					<span className='font-semibold text-gray-800'>{serviceName}</span>

					<span className='font-semibold'>
						{timeService} • ${price}
					</span>
				</div>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className='flex items-center active:bg-blue-500 justify-center bg-blue-600/90 w-12 h-9 rounded-lg'
				>
					<img src='/src/assets/edit.svg' alt='icon edit' width={22.5} />
				</button>
			</section>
			<EditAppointment
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				services={[1, 3, 4, 5, 6, 2, 6, 8, 2, 34, 90]}
				time='12:23'
			/>
		</article>
	)
}

export default CardNextAppointment
