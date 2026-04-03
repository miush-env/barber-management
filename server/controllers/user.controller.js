import User from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const { userId } = req.auth; // 🔑 Clerk ID

    // 🔍 buscar en Mongo
    let user = await User.findOne({ clerkId: userId });

    if (!user) {
      // ⚡ si NO existe → lo creo automáticamente
      user = new User({
        clerkId: userId,
        point: "0",
        appointments: []
      });

      await user.save();

      console.log("Usuario creado en Mongo");
    } else {
      console.log("Usuario ya existe en Mongo");
    }

    res.json(user);

  } catch (error) {
    res.status(500).json({ error: error.message });
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

export const checkRelation = async (req, res) => {
  try {
    // Traer ambas APIs en paralelo (más rápido)
    const [resUsers, resClerk] = await Promise.all([
      fetch("http://localhost:3000/Api/users"),
      fetch("http://localhost:3000/Api/users/clerk")
    ]);

    const users = await resUsers.json();
    const clerkUsers = await resClerk.json();

    for (const user of users) {
      const match = clerkUsers.find(cu => cu.email_addresses[0].email_address === user.email);
      if (match) {
        console.log(`✅ Usuario ${user._id} tiene relación con Clerk ID/EMAIL ${user.email}`);
      } else {
        console.log(`❌ Usuario ${user._id} NO tiene relación con Clerk ID/EMAIL ${user.email}`);
      }
    }

    res.json({ message: "Relaciones verificadas, revisa la consola" });
  } catch (error) {
    console.error("Error:", error);
  }
};