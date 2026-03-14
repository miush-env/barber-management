import InputForm from "../components/form/InputForm";
import SocialAuth from "../components/form/SocialAuth";
import { NavLink, useNavigate } from "react-router";

function SignIn() {
		const navigate = useNavigate()
	
		const handleSubmit = (e) => {
			e.preventDefault()
	
			// aquí luego pondrás validaciones
			navigate('/inicio')
		}

  return (
		<main className='relative w-screen h-screen justify-center p-6 flex flex-col gap-12 bg-[url("/src/assets/bg-signin.png")] bg-cover'>
			<div className='flex flex-col gap-2'>
				<h1 className='text-4xl uppercase font-extrabold'>Regístrate</h1>
				<p className='text-gray-800 text-balance'>
					Crea tu cuenta para continuar y obtener una experiencia unica con
					nuestro servicio
				</p>
			</div>
			<form onSubmit={handleSubmit} className='flex flex-col gap-6 z-10'>
				<InputForm type='text' placeholder='Nombre' required={true} />
				<InputForm type='text' placeholder='Apellido' required={true} />
				<InputForm
					type='email'
					placeholder='Correo electrónico'
					required={true}
				/>
				<InputForm
					type='password'
					placeholder='Contraseña'
					visibility={true}
					required={true}
				/>

				<div className='mt-6 flex flex-col gap-2'>
					<div className='flex gap-2 active:bg-gray-100/40 rounded-md px-2 py-1'>
						<NavLink to='/' className='font-semibold text-gray-500 text-sm'>
							Tienes una cuenta? Regístrate
						</NavLink>
					</div>
					<button className='bg-blue-800 text-white w-full font-semibold py-3 rounded-xl'>
						Crear cuenta
					</button>
				</div>
				<SocialAuth name='Google' icon='Google' />
			</form>
		</main>
	)
}

export default SignIn;