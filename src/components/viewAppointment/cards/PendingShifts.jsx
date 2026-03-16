import { useState } from 'react'
import EditAppointment from '../../modal/EditAppointment'

function PendingShifts({ service, time, status, price }) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<article className='bg-white border border-gray-300 m-4 p-3 rounded-md flex flex-col gap-7'>
			<section className='flex justify-between items-start'>
				<div>
					<h3 className='uppercase font-bold'>{service}</h3>
					<span className='text-gray-600 text-sm font-semibold'>
						Precio : {price}
					</span>
				</div>
				<div
					className={`
             p-1 rounded-2xl text-sm font-semibold
            ${status === true ? 'bg-green-400/60 text-green-800' : 'bg-red-400/60 text-red-800'}
            `}
				>
					{status === true ? 'Confirmado' : 'Cancelado'}
				</div>
			</section>
			<section className='flex justify-between items-center'>
				<div className='flex gap-2 items-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='#777'
						class='icon icon-tabler icons-tabler-filled icon-tabler-calendar-week'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<path d='M16 2c.183 0 .355 .05 .502 .135l.033 .02c.28 .177 .465 .49 .465 .845v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 .514 -.874l.093 -.046l.066 -.025l.1 -.029l.107 -.019l.12 -.007q .083 0 .161 .013l.122 .029l.04 .012l.06 .023c.328 .135 .568 .44 .61 .806l.007 .117v1h6v-1a1 1 0 0 1 1 -1m3 7h-14v9.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16z' />
						<path d='M9.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1' />
						<path d='M13.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1' />
						<path d='M17.02 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1' />
						<path d='M12.02 15a1 1 0 0 1 0 2a1.001 1.001 0 1 1 -.005 -2z' />
						<path d='M9.015 16a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1' />
					</svg>
					<span className='text-sm font-semibold text-gray-800'>{time}</span>
				</div>
				<div>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className='flex items-center active:bg-blue-500 justify-center bg-blue-600/90 w-10 h-8 rounded-lg'
					>
						<img src='../../assets/edit.svg' alt='icon edit' width={20} />
					</button>
					<EditAppointment
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						services={[1, 3, 4, 5, 6, 2, 6, 8, 2, 34, 90]}
						time='12:23'
					/>
				</div>
			</section>
		</article>
	)
}

export default PendingShifts
