import { useUser } from '@clerk/react'
import { Bell, BellRing } from 'lucide-react'

function Header({ notifications }) {
	const { user } = useUser()
	const hour = new Date().toLocaleTimeString('es-ES', {
		weekday: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	})

	return (
		<header className='flex w-full items-center justify-between px-6 h-24 '>
			<div className='flex gap-2 items-center'>
				<img
					src={user.imageUrl}
					alt={user.fullName}
					className='rounded-full w-12 border-2 border-gray-400'
				/>
				<div className=''>
						<h1 className='text-xl text-black font-bold'>{user.fullName}</h1>
						<span className='text-sm text-gray-600 uppercase font-semibold'>{hour}</span>
				</div>
			</div>
			<div className='relative'>
				<span
					className={`absolute -top-1 right-0
    flex items-center justify-center
    w-3 h-3
    text-xs font-semibold
    text-white bg-red-600
    rounded-full ${notifications > 0 ? 'animate-pulse' : 'hidden'}`}
				></span>
				{
					notifications > 0 ? <BellRing className='w-7s' /> : <Bell className='w-7' /> 
				}
			</div>
		</header>
	)
}

export default Header
