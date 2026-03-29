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
				Authorization: `Bearer ${process.env.CAL_API_SECRET}`,
				'cal-api-version': '2026-02-25',
			},
		})

		const data = await response.json()
		console.log(data.data)
		return data.data
	}