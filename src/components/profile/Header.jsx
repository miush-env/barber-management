import { useUser } from '@clerk/react'
import { Edit3 } from 'lucide-react'

function Header() {
	const { user } = useUser()
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
				<h1 className='text-xl font-black	 uppercase'>{user?.fullName}</h1>
				<span className='text-sm inline-flex items-center px-3 py-1 bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-blue-100'>
					{/* TODO: realizar una petición de tipo get a la base de datos para saber si es admin o usuario */}
					Dueño
				</span>
			</div>
			<button className='w-full bg-blue-600 rounded-full p-2 flex items-center justify-center gap-3 active:bg-blue-500'>
				<Edit3 className='w-4 h-4 text-white' />
				<span className='font-semibold text-white'>Editar Perfil</span>
			</button>
		</section>
	)
}

export default Header