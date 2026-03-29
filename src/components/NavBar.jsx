import { NavLink } from 'react-router'

function NavBar() {
	return (
		<nav className=' *:font-semibold left-0 h-full bg-blue-700 w-full flex justify-around items-center'>
			<NavLink
				to='/inicio'
				className={({ isActive }) =>
					`flex flex-col items-center text-sm rounded-full relative${
						isActive ? 'text-white ' : 'text-gray-400'
					}`
				}
			>
				{({ isActive }) => (
					<>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							fill='currentColor'
							viewBox='0 -960 960 960'
							className={`transition-all duration-300 ${isActive ? 'fill-white scale-110' : 'fill-gray-300 scale-100'}`}
						>
							<path d='M160-120v-480l320-240 320 240v480H560v-280H400v280z' />
						</svg>

						<div
							className={`
								w-8 h-4 absolute bg-white opacity-100 rounded-full
								${
									isActive
										? 'animate-[clipReveal_0.4s_ease-out_forwards] translate-y-8'
										: 'animate-[clipHide_0.3s_ease-in_forwards] translate-y-100'
								}
  						`}
						/>
					</>
				)}
			</NavLink>

			<NavLink
				to='/ver-citas'
				className={({ isActive }) =>
					`flex flex-col items-center  ${
						isActive ? 'text-slate-900' : 'text-gray-400'
					}`
				}
			>
				{({ isActive }) => (
					<>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='currentColor'
							className={`transition-all duration-300 ${isActive ? 'fill-white scale-110' : 'fill-gray-300 scale-100'}`}
						>
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />
							<path d='M16 2a1 1 0 0 1 .993 .883l.007 .117v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 1.993 -.117l.007 .117v1h6v-1a1 1 0 0 1 1 -1m3 8h-14v8.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16zm-9 4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1z' />
						</svg>

						<div
							className={`
								w-8 h-4 absolute bg-white opacity-100 rounded-full
								${
									isActive
										? 'animate-[clipReveal_0.4s_ease-out_forwards] translate-y-8'
										: 'animate-[clipHide_0.3s_ease-in_forwards] translate-y-100'
								}
  						`}
						/>
					</>
				)}
			</NavLink>

			<NavLink
				to='/crear-cita'
				className='bg-white rounded-full p-[4px] relative'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='34'
					height='34'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='w-9 stroke-blue-700'
				>
					<path stroke='none' d='M0 0h24v24H0z' fill='none' />
					<path d='M12 5l0 14' />
					<path d='M5 12l14 0' />
				</svg>
			</NavLink>

			<NavLink
				to='/ver-clientes'
				className={({ isActive }) =>
					`flex flex-col items-center  ${
						isActive ? 'text-slate-900' : 'text-gray-400'
					}`
				}
			>
				{({ isActive }) => (
					<>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							height='24'
							viewBox='0 -960 960 960'
							width='24'
							fill='currentColor'
							className={`transition-all duration-300 ${isActive ? 'fill-white scale-110' : 'fill-gray-300 scale-100'}`}
						>
							<path d='M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM247-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47Zm466 0q-47 47-113 47-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113q0 66-47 113Z' />
						</svg>

						<div
							className={`
								w-8 h-4 absolute bg-white opacity-100 rounded-full
								${
									isActive
										? 'animate-[clipReveal_0.4s_ease-out_forwards] translate-y-8'
										: 'animate-[clipHide_0.3s_ease-in_forwards] translate-y-100'
								}
  						`}
						/>
					</>
				)}
			</NavLink>

			<NavLink
				to='/perfil'
				className={({ isActive }) =>
					`flex flex-col items-center  ${
						isActive ? 'text-slate-900' : 'text-gray-400'
					}`
				}
			>
				{({ isActive }) => (
					<>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							fill='#555'
							className={`transition-all duration-300 ${isActive ? 'fill-white scale-110' : 'fill-gray-300 scale-100'}`}viewBox='0 0 24 24'
						>
							<path fill='none' d='M0 0h24v24H0z' />
							<path d='M12 2a5 5 0 1 1-5 5l.005-.217A5 5 0 0 1 12 2m2 12a5 5 0 0 1 5 5v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5z' />
						</svg>
						
						<div
							className={`
								w-8 h-4 absolute bg-white opacity-100
								${
									isActive
										? 'animate-[clipReveal_0.4s_ease-out_forwards] translate-y-8'
										: 'animate-[clipHide_0.3s_ease-in_forwards] translate-y-100'
								}
  						`}
						/>
					</>
				)}
			</NavLink>
		</nav>
	)
}

export default NavBar
