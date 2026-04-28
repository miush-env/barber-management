const API_KEY = import.meta.env.VITE_API_SECRET

export const GetTodayBookings = async () => {
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
	} catch (error) {
		console.log('Error: ', error)
	}
}

export const cancelBooking = async (uid) => {
	try {
		const res = await fetch(`https://api.cal.com/v2/bookings/${uid}/cancel`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_API_SECRET}`,
				'cal-api-version': '2026-02-25',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				cancellationReason: 'Cancelado desde mi app en la pagina de inicio',
				cancelSubsequentBookings: false,
			}),
		})

		if (!res.ok) {
			const errorText = await res.text()
			console.error('Error al cancelar en la pagina de inicio', {
				status: res.status,
				statusText: res.statusText,
				body: errorText,
			})
			throw new Error(`Error al cancelar en la pagina de inicio (${res.status})`)
		}

		return await res.json()
	} catch (error) {
		console.error(error)
		throw error
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
				cancellationReason: 'Cancelado desde mi app y actualización del estado en la UI',
			}),
		})

		if (!res.ok) throw new Error('Error al cancelar')

		setAppointments((prev) => prev.filter((cita) => cita.uid !== uid))
	} catch (error) {
		console.error(error)
	}
}

export const GetAppointmentsUser = async (email) => {
	try {
		const res = await fetch(
  `https://api.cal.com/v2/bookings?attendeeEmail=${encodeURIComponent(email)}`,
		{
			method: "GET",
			headers: {
				"Authorization": `Bearer ${API_KEY}`,
				"cal-api-version": "2026-02-25",
				"Content-Type": "application/json"
			}
		}
	);

		const data = await res.json()
		return data.data
	} catch (error) {
		console.log(error)	
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

export const GetBookingsStatus = async (email, status) => {
	try {

		let URL = `https://api.cal.com/v2/bookings?take=100&attendeeEmail=${encodeURIComponent(email)}`

		if ( status === "cancelled" ) {
			URL += `&status=cancelled`
		} else if (status === "upcoming") {
			URL += `&status=upcoming,past`
		}

		const res = await fetch( URL , {
			method: 'GET',
 			headers: {
				"Authorization": `Bearer ${API_KEY}`,
   			'cal-api-version': '2026-02-25',
				"Content-Type": "application/json"
			}
		})

		const data = await res.json()
		return data.data
	} catch (error) {
		console.log(error)
		return [];
	}
}

export const GetBookingsStatusAdmin = async (status) => {
	try {

		let URL = `https://api.cal.com/v2/bookings?take=100&sortStart=desc`;

		if (status === "cancelled") {
			URL += `&status=cancelled`;
		} else if (status === "upcoming") {
			// confirmadas pasadas + futuras
			URL += `&status=upcoming,past`;
		}
		// si status === "all", no añadimos filtro

		const res = await fetch(URL, {
			method: "GET",
 			headers: {
				Authorization: `Bearer ${API_KEY}`,
   			'cal-api-version': '2026-02-25',
				"Content-Type": "application/json"
			}
		})

		const data = await res.json()

		if (status === "upcoming") {
			return data.data.filter(
				(b) => b.status !== "cancelled" && b.status !== "rejected"
			)
		}

		return data.data
	} catch (error) {
		console.log(error)
		return [];
	}
}