import CardUpcomingAppointment from './cards/CardUpcomingAppointment'

function UpcomingAppointment() {

	const appointments = [
		{
			id: 1,
			clientName: 'Juan Ramirez',
			time: '11:00',
			service: 'Corte Clásico',
			status: true,
		},
		{
			id: 2,
			clientName: 'Mateo Vazquez',
			time: '12:00',
			service: 'Degradado + Barba',
			status: true,
		},
		{
			id: 3,
			clientName: 'Ariel Dundo',
			time: '13:30',
			service: 'Corte Clásico',
			status: false,
		},
		{
			id: 4,
			clientName: 'Ariel Dundo',
			time: '13:30',
			service: 'Corte Clásico',
			status: true,
		},
	]

	return (
		<article className='px-6 flex flex-col gap-2'>
			<h2 className='text-xl text-black font-bold'>Próximas Citas</h2>
			<div className='flex flex-col gap-4'>
				{
					appointments.map((client) => (
						<CardUpcomingAppointment 
							key={client.id}
							appointment={client}
						/>
					))
				}
			</div>
		</article>
	)
}

export default UpcomingAppointment