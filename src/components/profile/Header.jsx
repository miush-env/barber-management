import { useUser } from '@clerk/react'
import { useEffect, useState } from 'react'
import { checkRole } from '../../utils/UserCheckRol'

function Header() {
	const { user } = useUser()
	const [isAdmin, setIsAdmin] = useState(false)

	useEffect(() => {
		const verifyRole = async () => {
			if (!user?.id) return

			const isOwner = await checkRole(user.id)
			setIsAdmin(isOwner)
		}

		verifyRole()
	}, [user])

	return (
		<section className='p-4 flex flex-col items-center gap-2'>
			<div className='relative'>
				<img
					src={user?.imageUrl}
					alt='usuario o admin'
					className='w-28 h-28 rounded-full object-cover border-4 border-blue-600'
				/>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='35'
					height='35'
					viewBox='0 0 24 24'
					fill='currentColor'
					stroke='currentColor'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
					className='absolute bottom-0 right-0 fill-blue-600 stroke-gray-50'
				>
					<path stroke='none' d='M0 0h24v24H0z' fill='none' />
					<path d='M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2' />
					<path d='M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
				</svg>
			</div>
			<div className='flex flex-col items-center gap-2 my-2'>
				<h2 className='text-2xl font-black'>{user?.fullName}</h2>
				<span className='text-sm inline-flex items-center px-3 py-1 bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-blue-100'>
					{isAdmin ? 'Dueño' : 'Usuario'}
				</span>
			</div>
		</section>
	)
}

export default Header
