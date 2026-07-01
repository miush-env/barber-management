export const checkRole = async (userId) => {
	try {
		const response = await fetch(
			`http://localhost:3000/api/users/${userId}/is-owner`,
		)

		if (!response.ok) {
			throw new Error('Error verificando rol')
		}

		const data = await response.json()

		return data.isOwner
	} catch (error) {
		console.error('Error verificando rol:', error)
		return false
	}
}
