import React from 'react'

function CardNextAppointment({nameClient, status, time, serviceName, timeService, price}) {
  return (
		<article className='border-2 border-gray-300 rounded-lg p-2'>

			<section className='flex justify-between w-full'>
				<section className='flex gap-2'>
					<img
						src='https://i.pinimg.com/736x/01/73/df/0173df79cfd82180c0ccc0ae9eb36836.jpg'
						alt='photo client'
						className='w-12 h-12 object-cover rounded-full'
					/>
					<div>
						<h3 className='text-xl text-black font-bold '>Julian Ramirez</h3>
						<span className='bg-green-400 rounded-full w-38 uppercase py-1 justify-center items-center flex gap-1'>
							<img src='/src/assets/circle-check.svg' className='w-6' alt='' />
							<span className='text-sm font-bold text-black'>Confirmada</span>
						</span>
					</div>
				</section>

				<section className="flex flex-col ">
					<span className="text-4xl font-extrabold">10:30</span>
					<span className="uppercase font-extrabold text-gray-600 text-end">a.m</span>
				</section>
			</section>
      <section className='flex flex-col'>
        <span className="text-medium font-semibold text-gray-600">Corte clásico + barba</span>
        <span className="text-medium font-semibold text-gray-600">45 minutos - $8000</span>
      </section>
		</article>
	)
}

export default CardNextAppointment