export const checkRole = async (clerkId) => {
	try {
		const response = await fetch(
			`https://db-barber-management.onrender.com/api/users/isAdmin?clerkId=${clerkId}`,
		)

		if (!response.ok) {
			throw new Error('Error verificando rol')
		}

		const data = await response.json()
		return data
	} catch (error) {
		console.error(error)
		return { ok: false }
	}
}
