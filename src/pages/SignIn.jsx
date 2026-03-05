import InputForm from "../components/form/InputForm";
import SocialAuth from "../components/form/SocialAuth";

function SignIn() {
  return (
		<div className='w-screen p-10'>
			<div>
				<h1 className='text-2xl '>Registrarme</h1>
				<p className='text-gray-800'>Crea tu cuenta para continuar</p>
			</div>
			<form action='' className='flex flex-col'>
				<InputForm type='text' placeholder='Nombre' />
				<InputForm type='text' placeholder='Apellido' />
				<InputForm type='email' placeholder='Correo electrónico' />
				<InputForm type='password' placeholder='Contraseña' visibility={true} />
				<button className='bg-blue-800 text-white w-full py-2 rounded mt-4'>
					Registrarme
				</button>
				<SocialAuth name='Google' icon='Google' />
			</form>
		</div>
	)
}

export default SignIn;