import { NavLink } from 'react-router'
// import { House } from 'lucide-react'
import {
	IconHome,
	IconCalendarEvent,
	IconGroup,
	IconUser,
	IconAdd,
} from '../assets/icons/IconsCustom'

function NavBar() {
	return (
		<nav className=' *:font-semibold left-0 h-full bg-white border border-slate-100 mb-5 shadow shadow-slate-300 w-full rounded-full flex justify-around items-center'>
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
						<IconHome
							fill='#fff'
							className={`transition-all duration-300 ${isActive ? 'fill-blue-500 scale-110' : 'fill-gray-400 scale-100'}`}
						/>
						<div
							className={`
								w-7 h-1 absolute bg-blue-500 opacity-100 rounded-full
								${
									isActive
										? 'animate-[clipReveal_0.4s_ease-out_forwards] translate-y-7'
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
						<IconCalendarEvent
							fill='#fff'
							className={`transition-all duration-300 ${isActive ? 'fill-blue-500 scale-110' : 'fill-gray-400 scale-100'}`}
						/>
						<div
							className={`
								w-7 h-1 absolute bg-blue-500 opacity-100 rounded-full
								${
									isActive
										? 'animate-[clipReveal_0.4s_ease-out_forwards] translate-y-7'
										: 'animate-[clipHide_0.3s_ease-in_forwards] translate-y-100'
								}
  						`}
						/>
					</>
				)}
			</NavLink>

			<NavLink
				to='/crear-cita'
				className='bg-blue-700 rounded-full p-2 relative -translate-y-4'
			>
				<IconAdd className='w-9 stroke-white' />
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
						<IconGroup
							fill='#fff'
							className={`transition-all duration-300 ${isActive ? 'fill-blue-500 scale-110' : 'fill-gray-400 scale-100'}`}
						/>
						<div
							className={`
								w-7 h-1 absolute bg-blue-500 opacity-100 rounded-full
								${
									isActive
										? 'animate-[clipReveal_0.4s_ease-out_forwards] translate-y-7'
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
						<IconUser
							fill='#fff'
							className={`transition-all duration-300 ${isActive ? 'fill-blue-500 scale-110' : 'fill-gray-400 scale-100'}`}
						/>
						<div
							className={`
								w-7 h-1 absolute bg-blue-500 opacity-100 rounded-full
								${
									isActive
										? 'animate-[clipReveal_0.4s_ease-out_forwards] translate-y-7'
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
