import { Services } from './services'

export const getProfitToday = (appointments) => {
	let total = 0

	appointments.forEach((appointment) => {
		const service = Services[appointment.eventTypeId]

		if (service) {
			total += service.price
		}
	})
	return total
}
