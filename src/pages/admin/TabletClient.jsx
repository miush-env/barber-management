import NavBar from '@components/NavBar'
import CardClient from '@components/ClientTablet/CardClient'
import { useNavigate } from 'react-router'

function TabletClient() {
	const navigate = useNavigate()

	return (
		<main className='pb-20 min-h-screen bg-gray-50'>
			<header className='flex items-center p-4 border-b border-gray-500 bg-white'>
				<span className='' onClick={()=>{navigate('/inicio')}}>
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

			<section className='p-4 '>
				<label className='relative h-11 *:transition-colors *:duration-200'>
					<input
						type='text'
						className='border border-gray-400 rounded-lg h-11 w-full p-2 text-gray-500 focus:border-gray-700 outline-none focus:text-gray-800 peer'
						placeholder='Buscar Cliente'
					/>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
						className='absolute right-3 top-1/2 -translate-y-1/2 peer-focus:stroke-gray-800 stroke-gray-500'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<path d='M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
						<path d='M21 21l-6 -6' />
					</svg>
				</label>
			</section>

			<section className='p-4 flex flex-col gap-4'>
				<CardClient
					name='Juan Torres Ezequiel'
					photo='https://i.pinimg.com/736x/be/e8/fd/bee8fd978a17afee74ca0e945e74a875.jpg'
					phone='1134973144'
					email='basach1582@gmail.com'
					point={2403}
					birthday='12 OCT'
				/>
				<CardClient
					name='Juan Torres Ezequiel'
					photo='https://i.pinimg.com/736x/be/e8/fd/bee8fd978a17afee74ca0e945e74a875.jpg'
					phone='1134973144'
					email='basach1582@gmail.com'
					point={2403}
					birthday='12 OCT'
				/>
				<CardClient
					name='Juan Torres Ezequiel'
					photo='https://i.pinimg.com/736x/be/e8/fd/bee8fd978a17afee74ca0e945e74a875.jpg'
					phone='1134973144'
					email='basach1582@gmail.com'
					point={2403}
					birthday='12 OCT'
				/>
				<CardClient
					name='Juan Torres Ezequiel'
					photo='https://i.pinimg.com/736x/be/e8/fd/bee8fd978a17afee74ca0e945e74a875.jpg'
					phone='1134973144'
					email='basach1582@gmail.com'
					point={2403}
					birthday='12 OCT'
				/>
				<CardClient
					name='Juan Torres Ezequiel'
					photo='https://i.pinimg.com/736x/be/e8/fd/bee8fd978a17afee74ca0e945e74a875.jpg'
					phone='1134973144'
					email='basach1582@gmail.com'
					point={2403}
					birthday='12 OCT'
				/>
			</section>

			<NavBar />
		</main>
	)
}

export default TabletClient
