import React from 'react'

function Header() {
  return (
		<section className='p-4 flex flex-col items-center gap-2'>
			<div className='relative'>
				<img
					src='https://i.pinimg.com/736x/1a/82/4f/1a824fb4646435b5113f75ad5cff2256.jpg'
					alt='usuario o admin'
					className='w-28 h-28 rounded-full object-cover'
				/>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='35'
					height='35'
					viewBox='0 0 24 24'
					fill='currentColor'
					stroke='#fff'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
					className='absolute bottom-0 right-0 fill-blue-600'
				>
					<path stroke='none' d='M0 0h24v24H0z' fill='none' />
					<path d='M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2' />
					<path d='M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
				</svg>
			</div>
			<div className='flex flex-col items-center gap-1'>
				<h1 className='text-lg font-bold uppercase'>Juan Torres</h1>
				<span className=' text-gray-500 font-semibold uppercase text-sm'>
					Dueño
				</span>
			</div>
			<button className='w-full bg-blue-600 rounded-lg p-2 font-semibold text-white'>
				Editar Perfil
			</button>
		</section>
	)
}

export default Header