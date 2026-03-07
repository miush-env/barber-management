import CardUpcomingAppointment from "./cards/CardUpcomingAppointment"

function UpcomingAppointment() {
  return (
		<section className='p-6 flex flex-col gap-2'>
			<h2 className='text-2xl text-gray-700 font-bold'>Próximas Citas</h2>
			<div>
        <CardUpcomingAppointment />
			</div>
		</section>
	)
}

export default UpcomingAppointment