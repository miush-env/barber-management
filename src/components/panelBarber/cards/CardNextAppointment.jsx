import React from 'react'

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

  if (status === "confirmada") {
    statusStyle = "text-green-700";
    dotColor = "bg-green-500";
  } else if (status === "cancelada") {
    statusStyle = "text-red-700";
    dotColor = "bg-red-500";
  }

	return (
		<article className='bg-white border border-gray-200 shadow-xl shadow-gray-300 rounded-xl p-4 shadow-sm'>
			{/* Header */}
			<section className='flex justify-between items-start'>
				{/* Cliente */}
				<div className='flex gap-3'>
					<img
						src='https://i.pinimg.com/736x/01/73/df/0173df79cfd82180c0ccc0ae9eb36836.jpg'
						alt='photo client'
						className='w-11 h-11 object-cover rounded-full'
					/>

					<div className='flex flex-col'>
						<h3 className='text-lg text-gray-900 font-bold'>{nameClient}</h3>

						{/* Estado */}
						{/* <span className={`flex items-center gap-1 text-base font-medium text-green-700 ${statusStyle}`}>
							<span className={`w-2 h-2 bg-green-500 rounded-full ${datacolor}`}></span> */}
						<span
							className={`flex items-center gap-1 text-base font-medium ${statusStyle}`}
						>
							<span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
							{status}
						</span>
					</div>
				</div>

				{/* Hora */}
				<div className='flex flex-col items-end leading-none'>
					<span className='text-3xl font-bold text-gray-900'>{time}</span>
					<span className='text-xs uppercase text-gray-500'>am</span>
				</div>
			</section>

			{/* Servicio */}
			<section className='mt-3 flex flex-col text-sm text-gray-600'>
				<span className='font-semibold text-gray-800'>{serviceName}</span>

				<span className='font-semibold'>
					{timeService} • ${price}
				</span>
			</section>
			<button className="text-lg text-center shadow-lg transition-shadow duration-300 active:shadow-red-600 bg-red-500 w-full h-9 rounded-lg mt-2">
				<span className="text-white">Eliminar</span>
			</button>
		</article>
	)
}

export default CardNextAppointment
