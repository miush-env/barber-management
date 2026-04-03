// Todo : verificar si el usuario registrado ene una colección asociada en caso de no tenerla crearle una

// import { getUsersClerk } from "../controllers/user.controller";
const exploreUserDB = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/users/clerk')
    const data = await res.json();
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      console.log("Email user :", element.email_addresses[0].email_address);  
    }
  } catch (error) {
    console.log(error)
  }
}

export const validateUser = (req, res, next) => {
  console.log("Validando usuario:", exploreUserDB());
  next();
}