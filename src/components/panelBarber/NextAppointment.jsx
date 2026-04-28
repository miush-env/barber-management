import CardNextAppointment from './cards/CardNextAppointment'

function NextAppointment({
	appointment
}) {
	return (
		<article className='p-6 flex flex-col gap-2'>
			<h2 className='text-gray-600 uppercase text-sm font-bold'>Cita Actual</h2>
			<div>
				{appointment === null ? <p className='text-gray-500'>No tienes citas programadas</p> : (	<CardNextAppointment appointment={appointment}/>)
				}
			</div>
		</article>
	)
}

export default NextAppointment
