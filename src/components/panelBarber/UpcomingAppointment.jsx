import CardUpcomingAppointment from './cards/CardUpcomingAppointment'

function UpcomingAppointment({ appointments }) {

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