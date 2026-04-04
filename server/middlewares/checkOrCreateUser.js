import User from '../models/User.js'

export const checkOrCreateUser = async (req, res, next) => {
	const { clerkId, email, firstName, lastName, imageUrl } = req.body

	if (!email) {
		return res.status(400).json({ message: 'Email requerido' })
	}

	if (typeof email !== 'string') {
		return res.status(400).json({ message: 'Email inválido' })
	}

	try {
		const user = await User.findOneAndUpdate(
			{ clerkId },
			{ 
        email, 
        clerkId, 
        firstName, 
        lastName, 
        imageUrl 
      },
			{ new: true, upsert: true },
		)

		req.user = user
		next()
	} catch (error) {
		console.error('Error en middleware:', error)
     return res.status(500).json({ 
    message: 'Error del servidor',
    error: error.message
  });
	}
}
