const API_KEY = import.meta.env.VITE_API_SECRET

export const getTodayBookings = async () => {
		const today = new Date()
		const startOfDay = new Date(
			today.getFullYear(),
			today.getMonth(),
			today.getDate(),
		).toISOString()
		const endOfDay = new Date(
			today.getFullYear(),
			today.getMonth(),
			today.getDate() + 1,
		).toISOString()

		const url = `https://api.cal.com/v2/bookings?afterStart=${startOfDay}&beforeEnd=${endOfDay}&status=upcoming`

		const response = await fetch(url, {
			method: 'GET',
			headers: {
				//  cal_live_c144e9d89987946024fa42e93413a28b
				Authorization: `Bearer ${API_KEY}`,
				'cal-api-version': '2026-02-25',
			},
		})

		const data = await response.json()
		console.log(data.data)
		return data.data
}

export const getNameEvent = async () => {
	try {
		const response = await fetch('https://api.cal.com/v2/event-types', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${API_KEY}`,
				'cal-api-version': '2024-08-14',
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		}

		const data = await response.json();

		const events =
			data?.data?.eventTypeGroups?.[0]?.eventTypes || [];

		return events;

	} catch (error) {
		console.error('Error al obtener eventos:', error);
		return []; // importante devolver algo consistente
	}
};

export const bookingEvent = async () => {
	try {
		const response = await fetch(
			'https://api.cal.com/v2/bookings?status=upcoming',
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${API_KEY}`,
					'cal-api-version': '2026-02-25',
					'Content-Type': 'application/json',
				},
			},
		)

		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`)
		}

		const data = await response.json()
		return data.data		
		// console.log('Citas obtenidas:', data.data)
		// setAppointments(data.data)

		
	} catch (error) {
		console.log('Error: ', error)
	}
}