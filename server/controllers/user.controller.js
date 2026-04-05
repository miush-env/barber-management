import User from "../models/User.js";

export const getUserAppointment = async (req, res) => {
  const { clerkId } = req.params

  try {
    const user = await User.findOne({clerkId}).select('appointments')

    if(!user) {
      return res.status(404).json({ message: "Usuario no encontrado" })
    }

    return res.status(200).json(user.appointments || [])

  } catch (error) {
    console.error("Error al obtener citas:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo usuarios" });
  }
};

export const getUsersClerk = async (req, res) => {
  try {
    const response = await fetch("https://api.clerk.com/v1/users", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
      },
    });

    const data = await response.json();

    res.json(data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al traer usuarios de Clerk" });
  }
}

export const checkRelation =  (req, res) => {
  return res.status(200).json(req.user);
};