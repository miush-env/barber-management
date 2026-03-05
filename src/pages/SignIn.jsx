import InputForm from "../components/form/InputForm";

function SignIn() {
  return (
		<div className=''>
			<div>
				<h1 className='text-2xl '>Registrarme</h1>
        <p className='text-gray-800'>Crea tu cuenta para continuar</p>
			</div>
			<form action=''>
				<InputForm type='text' placeholder='Nombre' />
				<InputForm type='text' placeholder='Apellido' />
				<InputForm type='email' placeholder='Correo electrónico' />
				<InputForm type='password' placeholder='Contraseña' visibility={true} />
				<button className='bg-gray-700 text-white w-full py-2 rounded mt-4'>
					Registrarme
				</button>
			</form>
		</div>
	)
}

export default SignIn;