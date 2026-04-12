import React from 'react'
import { useUser } from '@clerk/react'
import { Smartphone, Cake, Mail } from 'lucide-react'

function PersonalInfo() {
	const { user } = useUser()
	
	return (
		<section className='flex flex-col gap-4 [&>div]:flex [&>div]:items [&>div]:p-2 [&>div]:gap-4 bg-white rounded-xl p-2'>
			<div>
				<div className='flex items-center justify-center bg-blue-100 p-2 rounded-full'>
					<Mail className='text-blue-700 '/>
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

			<div>
				<div className='flex items-center justify-center bg-green-100 p-2 rounded-full'>
					<Cake className='text-green-700'/>
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

			<div>
				<div className='flex items-center justify-center bg-amber-100 rounded-full p-2'>
				<Smartphone className='text-amber-700'/>
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
