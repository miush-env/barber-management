import React from 'react'

function CardUpcomingAppointment({time, clientName = 'Sin nombre', service = "corte clasico", status}) {

  
  return (
		<section
			className={`relative w-full h-18 px-4 bg-white  rounded-xl border-2 ${status ? 'border-green-500' : 'border-red-500'} flex items-center gap-4`}
		>
			<div className='flex flex-col text-center items-center justify-center'>
				<span className='font-bold uppercase text-base text-black'>{time}</span>
			</div>
			<div className='w-full'>
				<h3 className='text-lg text-black font-bold'>{clientName}</h3>
				<span className='text-gray-500 text-sm font-semibold'>{service}</span>
				<img
					src='/src/assets/arrow-up-right.svg'
					alt='icon'
					className='absolute right-4 top-1/2 transform -translate-y-1/2 '
				/>
			</div>
		</section>
	)
}

export default CardUpcomingAppointment