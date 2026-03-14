import NavBar from '@components/NavBar'

function TabletClient() {
  return (
		<main className='pb-20 min-h-screen bg-gray-50'>
			<header className='flex items-center p-4 border-b border-gray-500 bg-white'>
				<span className=''>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='#555'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
						class='icon icon-tabler icons-tabler-outline icon-tabler-arrow-left'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<path d='M5 12l14 0' />
						<path d='M5 12l6 6' />
						<path d='M5 12l6 -6' />
					</svg>
				</span>
				<h1 className='text-xl font-bold text-center flex-1 '>Tus Citas</h1>
			</header>
			TabletClient
			<NavBar />
		</main>
	)
}

export default TabletClient