import React from 'react'
import { useUser } from '@clerk/react'

function PersonalInfo() {
	const { user } = useUser()
	
	return (
		<section className='flex flex-col gap-4'>
			<div className='flex gap-4 bg-white rounded-lg p-2'>
				<div className='flex items-center justify-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='38'
						height='38'
						fill='currentColor'
						className='bg-gray-200 rounded-full p-2 fill-gray-800'
						viewBox='0 0 24 24'
					>
						<path fill='none' d='M0 0h24v24H0z' />
						<path d='M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297.116.066a1 1 0 0 0 .878 0l.116-.066z' />
						<path d='M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a3 3 0 0 1 2.354-1.42L5 4z' />
					</svg>
				</div>
				<div className='flex flex-col gap-1'>
					<span className='text-sm font-semibold text-gray-500'>
						Correo Electrónico
					</span>
					<span className='text-md font-bold text-gray-800 uppercase'>
						{user.emailAddresses[0].emailAddress}
					</span>
				</div>
			</div>
			<div className='flex gap-4 bg-white rounded-lg p-2'>
				<div className='flex items-center justify-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='38'
						height='38'
						fill='none'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						className='bg-gray-200 rounded-full p-2 stroke-gray-800'
						viewBox='0 0 24 24'
					>
						<path fill='none' stroke='none' d='M0 0h24v24H0z' />
						<path d='M3 20h18v-8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3z' />
						<path d='M3 14.803A2.4 2.4 0 0 0 4 15a2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1c.35.007.692-.062 1-.197M12 4l1.465 1.638a2 2 0 1 1-3.015.099z' />
					</svg>
				</div>
				<div className='flex flex-col gap-1'>
					<span className='text-sm font-semibold text-gray-500'>
						Fecha de nacimiento
					</span>
					<span className='text-md font-bold text-gray-800 uppercase'>
						05 sep 2008
					</span>
				</div>
			</div>
			<div className='flex gap-4 bg-white rounded-lg p-2'>
				<div className='flex items-center justify-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='38'
						height='38'
						fill='none'
						stroke='currentColor'
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
						className='bg-gray-200 rounded-full p-2 stroke-gray-800'
						viewBox='0 0 24 24'
					>
						<path fill='none' stroke='none' d='M0 0h24v24H0z' />
						<path d='M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2' />
					</svg>
				</div>
				<div className='flex flex-col gap-1'>
					<span className='text-sm font-semibold text-gray-500'>
						Teléfono
					</span>
					<span className='text-md font-bold text-gray-800 uppercase'>
						11 34228644
					</span>
				</div>
			</div>
		</section>
	)
}

export default PersonalInfo
