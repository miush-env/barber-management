import CardNextAppointment from './cards/CardNextAppointment'

function NextAppointment() {
  return (
		<section className='p-6 flex flex-col gap-2'>
			<h2 className="text-2xl text-gray-700 font-bold">Cita Actual</h2>
			<div>
				<CardNextAppointment />
			</div>
		</section>
	)
}

export default NextAppointment