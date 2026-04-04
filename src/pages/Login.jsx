import { SignIn } from '@clerk/react'

function Login() {
	return (
		<main className='relative w-full h-screen overflow-hidden justify-center p-6 flex flex-col gap-12'>
			<div
				className='bg-blue-700 blur-xl w-50 rounded-full h-50 absolute -top-15 -left-15 -z-999'
				style={{
					animation: 'pulseSoft 3s ease-in-out infinite',
				}}
			></div>
			<div
				className='bg-blue-400 blur-xl w-40 rounded-full h-40 absolute -top-15 -left-15 -z-980'
				style={{
					animation: 'pulseSoft 3s ease-in-out infinite',
				}}
			></div>
			<div
				className='bg-blue-700 blur-xl w-70 rounded-full h-70 absolute top-1/2 -right-30 -z-999'
				style={{
					animation: 'pulseSoft 4s ease-in-out infinite',
				}}
			></div>
			<div
				className='bg-blue-400 blur-xl w-60 rounded-full h-60 absolute top-1/2 -right-30 -z-980'
				style={{
					animation: 'pulseSoft 4s ease-in-out infinite',
				}}
			></div>
			<div
				className='bg-blue-700 blur-xl w-70 rounded-full h-70 absolute -bottom-20 -left-30 -z-999'
				style={{
					animation: 'pulseSoft 5s ease-in-out infinite',
				}}
			></div>
			<div
				className='bg-blue-400 blur-xl w-60 rounded-full h-60 absolute -bottom-20 -left-30 -z-980'
				style={{
					animation: 'pulseSoft 5s ease-in-out infinite',
				}}
			></div>
			<header className='flex w-full items-center justify-center flex-col gap-2'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='70'
					height='70'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='icon icon-tabler icons-tabler-outline icon-tabler-user-key stroke-blue-700'
				>
					<path stroke='none' d='M0 0h24v24H0z' fill='none' />
					<path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0' />
					<path d='M6 21v-2a4 4 0 0 1 4 -4h5' />
					<path d='M18.5 18.5l-3.5 3.5l-1.5 -1.5' />
					<path d='M18.554 18.414a2 2 0 1 1 2.828 -2.828a2 2 0 0 1 -2.828 2.828' />
					<path d='M16 19l1 1' />
				</svg>
				<h1 className='text-4xl uppercase font-extrabold'>Iniciar Sesion</h1>
				<p className='text-gray-500 font-semibold'>Bienvenido de vuelta</p>
			</header>
			<article className="flex w-full items-center justify-center">
				<SignIn fallbackRedirectUrl={'/perfil'} />
			</article>
		</main>
	)
}

export default Login
