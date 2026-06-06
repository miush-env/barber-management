import { useUser } from '@clerk/react'
import { Bell, BellRing } from 'lucide-react'
import { IconCalendarTime } from '@tabler/icons-react'

function Header() {
	const { user } = useUser()
	const hour = new Date().toLocaleTimeString('es-ES', {
		weekday: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	})

	return (
		<header className='relative overflow-hidden bg-linear-to-br from-blue-700 via-blue-600 to-blue-500 px-6 pt-6 pb-8 rounded-b-[32px]'>
			<div className='absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full' />
			<div className='absolute -bottom-20 -left-20 w-52 h-52 bg-white/5 rounded-full' />

			<div className='relative flex items-center gap-4'>
				<dev className='relative'>
					<img
						src={user.imageUrl}
						alt={user.fullName}
						className='w-12 rounded-full border-4 border-white/90 object-cover'
					/>
					<div className='absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white' />
				</dev>
				<div className=''>
					<h1 className='text-xl text-white font-bold'>
						Hola, {user.fullName} 👋
					</h1>
					<div className='flex gap-1 items-center mt-1'>
						<IconCalendarTime stroke={2} size={20} color='#dbeafe' />
						<span className='text-sm text-blue-100  font-semibold'>{hour}</span>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
