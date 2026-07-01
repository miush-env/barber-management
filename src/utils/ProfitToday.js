import { getService } from './services'

export const getProfitToday = (appointments) => {
	let total = 0

	appointments.forEach((appointment) => {
		const service = getService(appointment.eventTypeId)

		if (service) {
			total += service.price
		}
	})
	return total
}
