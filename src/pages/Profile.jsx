import NavBar from '../components/NavBar'
import PersonalInfo from '../components/profile/PersonalInfo.jsx'
import AccountSettings from '../components/profile/AccountSettings.jsx'
import Header from '../components/profile/Header.jsx'

import { useNavigate } from 'react-router'

function Profile() {
	const navigate = useNavigate()

	return (
		<main>
			<header className='flex items-center p-4 border-b border-gray-500 bg-white'>
				<span
					className=''
					onClick={() => {
						navigate('/inicio')
					}}
				>
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
				<h2 className='text-xl font-bold text-center flex-1 '>Perfil</h2>
			</header>

			<article className='bg-gray-200/40 min-h-screen'>
				<section>
					<Header />
				</section>
				<section className='p-4'>
          <h2 className='text-lg font-semibold'>Datos Personales</h2>
					<PersonalInfo />
				</section>
				<section className='p-4'>
					<AccountSettings />
				</section>
			</article>

			<section className='fixed bottom-0 w-full h-14'>
				<NavBar />
			</section>
		</main>
	)
}

export default Profile
