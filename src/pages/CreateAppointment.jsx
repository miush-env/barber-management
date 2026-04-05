import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router'
import ServiceCard	from '@components/CreateAppointment/ServiceCard'
import ButtonCallCal from '../components/CreateAppointment/Cal.com/ButtonCallCal'
import { serviceCorte, serviceCorteBarba, serviceSoloPuntas, serviceGlobal } from '../utils/ServiceCal'
import { getNameEvent } from '../utils/Bookings'
import { useEffect, useState } from 'react'

function CreateAppointment() {
	const [nameEvent, setNameEvent] = useState([])
  const navigate = useNavigate()

	const functionMapper = {
		"corte-clasico": serviceCorte,
		"corte-clasico-barba": serviceCorteBarba,
		"tinte-solo-puntas": serviceSoloPuntas,
		"global": serviceGlobal
	};

	useEffect(() => {
		const fetchNameEvent = async () => {
        try {
            const res = await getNameEvent();
            if (res) {
              setNameEvent(res);
            }
        } catch (error) {
          	console.error('Error en la petición:', error);
        }
    };
    fetchNameEvent();
	}, [])

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
				 <section className="mb-6" aria-labelledby="services-title">
            <div className="flex flex-col gap-4 p-4">
              {
								nameEvent.map((s, index) => {
									const calFunction = functionMapper[s.slug] || serviceCorte
								
									return (
										<ButtonCallCal key={index} service={calFunction}>
											<ServiceCard key={index} {...s} />
										</ButtonCallCal>
									)
								})
							}
            </div>
          </section>
			</div>

			<section className='fixed bottom-0 w-full h-14'>
				<NavBar />
			</section>
		</main>
	)
}

export default CreateAppointment
