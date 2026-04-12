import NavBar from '../components/NavBar'
import PersonalInfo from '../components/profile/PersonalInfo.jsx'
import AccountSettings from '../components/profile/AccountSettings.jsx'
import Header from '../components/profile/Header.jsx'
import { ChevronLeft } from 'lucide-react'
import { useNavigate } from 'react-router'

function Profile() {
	const navigate = useNavigate()

	return (
		<main>
			<header className='flex items-center p-4 border-b border-gray-300 bg-white'>
				<button
					className='p-1 active:bg-slate-200 rounded-full transition-colors'
					onClick={() => {
						navigate('/inicio')
					}}
				>
					  <ChevronLeft className="w-6 h-6 text-slate-600" />
				</button>
				<h2 className='text-xl font-bold text-center flex-1 '>Perfil</h2>
			</header>

			<article className='bg-gray-200/40 min-h-screen'>
				<section>
					<Header />
				</section>
				<section className='p-4'>
          <h2 className='text-sm mb-2 font-bold uppercase text-gray-500/80 tracking-wider'>Datos Personales</h2>
					<PersonalInfo />
				</section>
				<section className='p-4'>
					<AccountSettings />
				</section>
			</article>

			<section className='fixed bottom-0 w-full px-5'>
				<NavBar />
			</section>
		</main>
	)
}

export default Profile
