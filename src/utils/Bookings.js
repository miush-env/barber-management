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

export const cancelBooking2 = async (uid, setAppointments) => {
	try {
		const res = await fetch(`https://api.cal.com/v2/bookings/${uid}/cancel`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_API_SECRET}`,
				'cal-api-version': '2024-08-13',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				cancellationReason: 'Cancelado desde la app',
			}),
		})

		if (!res.ok) throw new Error('Error al cancelar')

		setAppointments((prev) => prev.filter((cita) => cita.uid !== uid))
	} catch (error) {
		console.error(error)
	}
}

export const formatDate = (dateString, intuitive = true) => {
		const date = new Date(dateString)

		return date.toLocaleString('es-AR', {
			day: 'numeric',
			month: '2-digit',
			...(intuitive ? {
 			weekday: 'short',
	    hour: "2-digit",
      minute: "2-digit",
    } : {
			year: 'numeric',
		})
		})
}

export  const getAppointments = async (clerkId) => {
  try {
    const res = await fetch("http://localhost:3000/api/users/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ clerkId }),
    });

    const data = await res.json();

    if (!data.ok) {
      throw new Error(data.message);
    }

    return data.appointments;

  } catch (error) {
    console.error("Error:", error.message);
    return [];
  }
};