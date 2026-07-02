import { useState, useImperativeHandle, forwardRef } from 'react'
import { useUser } from '@clerk/react'
import { Smartphone, Cake, Mail } from 'lucide-react'
import { validatePhone } from '../../utils/phone'

const PersonalInfo = forwardRef(({ edit }, ref) => {
	const { user } = useUser()
	const [phone, setPhone] = useState(user?.unsafeMetadata?.phone || '')
	const [birthdate, setBirthdate] = useState(
		user?.unsafeMetadata?.birthdate || '',
	)

	useImperativeHandle(ref, () => ({
		save: async () => {
			const validation = validatePhone(phone)
			if (!validation.valid) return

			setPhone(validation.formatted)

			await user.updateMetadata({
				unsafeMetadata: {
					phone: validation.formatted,
					birthdate,
				},
			})
		},
	}))

	const formatDateToSpanish = (dateString) => {
		if (!dateString) return 'No especificada'

		const [year, month, day] = dateString.split('-')

		const date = new Date(year, month - 1, day)

		return new Intl.DateTimeFormat('es-ES', {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
		}).format(date)
	}

	const rawBirthdate = user?.unsafeMetadata?.birthdate

	return (
		<section className='flex flex-col gap-4 [&>div]:flex [&>div]:items [&>div]:p-2 [&>div]:gap-4 rounded-2xl border border-white/[0.14] bg-white/[0.05] backdrop-blur-xl p-2 shadow-[0_10px_30px_rgba(0,0,0,0.35)]'>
			<div>
				<div className='flex items-center justify-center bg-blue-400/10 p-2 rounded-full'>
					<Mail className='text-blue-300' />
				</div>
				<div className='flex flex-col gap-1 min-w-0'>
					<span className='text-sm font-semibold text-white/40'>
						Correo Electrónico
					</span>
					<span className='text-md flex flex-col font-bold text-white/85 truncate '>
						{user.emailAddresses[0].emailAddress}
					</span>
				</div>
			</div>

			<div>
				<div className='flex items-center justify-center bg-emerald-400/10 p-2 rounded-full'>
					<Cake className='text-emerald-300' />
				</div>
				<div className='flex flex-col gap-1'>
					<span className='text-sm font-semibold text-white/40'>
						Fecha de nacimiento
					</span>

					{edit ? (
						<input
							type='date'
							value={birthdate}
							onChange={(e) => setBirthdate(e.target.value)}
							className='text-md font-bold text-white/85 uppercase outline-none border border-white/[0.14] bg-white/[0.04] rounded px-2 py-1 focus:border-[#e3b869]/40'
						/>
					) : (
						<span className='text-md font-bold text-white/85 uppercase'>
							{formatDateToSpanish(rawBirthdate)}
						</span>
					)}
				</div>
			</div>

			<div>
				<div className='flex items-center justify-center bg-[#e3b869]/10 rounded-full p-2'>
					<Smartphone className='text-[#e3b869]' />
				</div>
				<div className='flex flex-col gap-1'>
					<span className='text-sm font-semibold text-white/40'>Teléfono</span>
					{edit ? (
						<input
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							placeholder='9 11 1234-5678'
							className='text-md font-bold text-white/85 uppercase outline-none border border-white/[0.14] bg-white/[0.04] rounded px-2 py-1 focus:border-[#e3b869]/40'
						/>
					) : (
						<span className='text-md font-bold text-white/85 uppercase'>
							{user?.unsafeMetadata?.phone || 'No especificado'}
						</span>
					)}
				</div>
			</div>
		</section>
	)
})

export default PersonalInfo
