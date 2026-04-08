import CardNextAppointment from './cards/CardNextAppointment'

function NextAppointment({
	nameClient,
	status,
	time,
	serviceName,
	timeService,
	price,
}) {
	return (
		<article className='p-6 flex flex-col gap-2'>
			<h2 className='text-gray-600 uppercase text-sm font-bold'>Cita Actual</h2>
			<div>
				<CardNextAppointment
					nameClient={nameClient}
					status={status}
					time={time}
					serviceName={serviceName}
					timeService={timeService}
					price={price}
				/>
			</div>
		</article>
	)
}

export default NextAppointment
