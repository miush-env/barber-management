// import SectionTime from "../components/CreateAppointment/SectionTime"
import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router'
import Calendar from '@components/CreateAppointment/Cal.com/Calendar'

function CreateAppointment() {
  	const navigate = useNavigate()

	return (
		<main className='bg-gray-100 min-h-screen'>
			<header className='flex items-center p-4 border-b border-gray-500 bg-white'>
				<span className='' 	onClick={() => {
						navigate('/inicio')
					}}>
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
				<h1 className='text-xl font-bold text-center flex-1 '>Agendar Cita</h1>
			</header>

			<div className='h-full bg-gray-100'>
        <Calendar />
			</div>

			<section className='fixed bottom-0 w-full h-14'>
				<NavBar />
			</section>
		</main>
	)
}

export default CreateAppointment
