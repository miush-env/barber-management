import CardUpcomingAppointment from "./cards/CardUpcomingAppointment"

function UpcomingAppointment() {
  return (
		<article className='px-6 flex flex-col gap-2'>
			<h2 className='text-xl text-black font-bold'>Próximas Citas</h2>
			<div className='flex flex-col gap-4'>
				<CardUpcomingAppointment
					clientName='Juan Ramirez'
					time='11:00'
					service='Corte Clásico'
					status={true}
				/>
				<CardUpcomingAppointment
					clientName='Mateo Vazquez'
					time='12:00'
					service='Degradado + Barba'
					status={true}
				/>
				<CardUpcomingAppointment
					clientName='Ariel Dundo'
					time='13:30'
					service='Corte Clásico'
					status={false}
				/>
				<CardUpcomingAppointment
					clientName='Ariel Dundo'
					time='13:30'
					service='Corte Clásico'
					status={true}
				/>
			</div>
		</article>
	)
}

export default UpcomingAppointment