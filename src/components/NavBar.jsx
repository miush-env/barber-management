import { NavLink } from "react-router"

function NavBar() {

	return (
		<nav className='fixed bottom-0 *:font-bold left-0 w-full h-16 bg-white border-t border-gray-200 flex justify-around items-center'>
			<NavLink
				to='/inicio'
				className={({ isActive }) =>
					`flex flex-col items-center text-xs ${
						isActive ? 'text-slate-900' : 'text-gray-400'
					}`
				}
			>
				{({ isActive }) => (
					<>
						<img src='../../assets/home.svg' className='w-6 mb-1' />
						<span>Inicio</span>

						{isActive && (
							<div className='w-6 h-[2px] bg-slate-900 mt-1 rounded'></div>
						)}
					</>
				)}
			</NavLink>

			<NavLink
				to='/ver-citas'
				className={({ isActive }) =>
					`flex flex-col items-center text-xs ${
						isActive ? 'text-slate-900' : 'text-gray-400'
					}`
				}
			>
				{({ isActive }) => (
					<>
						<img src='../../assets/calendar-week.svg' className='w-6 mb-1' />
						<span>Agenda</span>

						{isActive && (
							<div className='w-6 h-[2px] bg-slate-900 mt-1 rounded'></div>
						)}
					</>
				)}
			</NavLink>

			<NavLink
				to='/ver-clientes'
				className={({ isActive }) =>
					`flex flex-col items-center text-xs ${
						isActive ? 'text-slate-900' : 'text-gray-400'
					}`
				}
			>
				{({ isActive }) => (
					<>
						<img src='../../assets/users-group-nav.svg' className='w-6 mb-1' />
						<span>Clientes</span>

						{isActive && (
							<div className='w-6 h-[2px] bg-slate-900 mt-1 rounded'></div>
						)}
					</>
				)}
			</NavLink>

			<NavLink
				to='/perfil'
				className={({ isActive }) =>
					`flex flex-col items-center text-xs ${
						isActive ? 'text-slate-900' : 'text-gray-400'
					}`
				}
			>
				{({ isActive }) => (
					<>
						<img src='../../assets/user.svg' className='w-6 mb-1' />
						<span>Perfil</span>

						{isActive && (
							<div className='w-6 h-[2px] bg-slate-900 mt-1 rounded'></div>
						)}
					</>
				)}
			</NavLink>
		
		</nav>
	)
}

export default NavBar
