import React, { useState, useImperativeHandle, forwardRef } from 'react'
import { useUser } from '@clerk/react'
import { Smartphone, Cake, Mail } from 'lucide-react'
import { validatePhone } from '../../utils/phone'

const PersonalInfo = forwardRef(({ edit }, ref) => {
	const { user } = useUser()
	const [phone, setPhone] = useState(user?.unsafeMetadata?.phone || '')
	const [birthdate, setBirthdate] = useState(user?.unsafeMetadata?.birthdate || '')

	useImperativeHandle(ref, () => ({
		save: async () => {
			const validation = validatePhone(phone)
			if (validation.valid) {
				await user.update({
					unsafeMetadata: {
						...user.unsafeMetadata,
						phone: validation.formatted,
						birthdate
					}
				})
			}
		}
	}))

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
					{edit ? (
						<input
							type='date'
							value={birthdate}
							onChange={(e) => setBirthdate(e.target.value)}
							className='text-md font-bold text-gray-800 uppercase outline-none border rounded px-2 py-1'
						/>
					) : (
						<span className='text-md font-bold text-gray-800 uppercase'>
							{user?.unsafeMetadata?.birthdate || 'No especificada'}
						</span>
					)}
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
					{edit ? (
						<input
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							placeholder='9 11 1234-5678'
							className='text-md font-bold text-gray-800 uppercase outline-none border rounded px-2 py-1'
						/>
					) : (
						<span className='text-md font-bold text-gray-800 uppercase'>
							{user?.unsafeMetadata?.phone || 'No especificado'}
						</span>
					)}
				</div>
			</div>
		</section>
	)
})

export default PersonalInfo
