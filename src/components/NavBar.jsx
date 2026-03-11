function NavBar() {
	const active = 'clientes' // luego esto vendrá del router

	return (
		<nav className='fixed bottom-0 *:font-bold left-0 w-full h-16 bg-white border-t border-gray-200 flex justify-around items-center'>
			<a
				href='#'
				className={`flex flex-col items-center text-xs ${
					active === 'inicio' ? 'text-slate-900' : 'text-gray-400'
				}`}
			>
				<img src='/src/assets/home.svg' className='w-6 mb-1' />
				<span>Inicio</span>
				{active === 'inicio' && (
					<div className='w-6 h-[2px] bg-slate-900 mt-1 rounded'></div>
				)}
			</a>

			<a
				href='#'
				className={`flex flex-col items-center text-xs ${
					active === 'agenda' ? 'text-slate-900' : 'text-gray-400'
				}`}
			>
				<img src='/src/assets/calendar-week.svg' className='w-6 mb-1' />
				<span>Agenda</span>
				{active === 'agenda' && (
					<div className='w-6 h-[2px] bg-slate-900 mt-1 rounded'></div>
				)}
			</a>

			<a
				href='#'
				className={`flex flex-col items-center text-xs ${
					active === 'clientes' ? 'text-slate-900' : 'text-gray-400'
				}`}
			>
				<img src='/src/assets/users-group-nav.svg' className='w-6 mb-1' />
				<span>Clientes</span>
				{active === 'clientes' && (
					<div className='w-6 h-[2px] bg-slate-900 mt-1 rounded'></div>
				)}
			</a>

			<a
				href='#'
				className={`flex flex-col items-center text-xs ${
					active === 'perfil' ? 'text-slate-900' : 'text-gray-400'
				}`}
			>
				<img src='/src/assets/user.svg' className='w-6 mb-1' />
				<span>Perfil</span>
				{active === 'perfil' && (
					<div className='w-6 h-[2px] bg-slate-900 mt-1 rounded'></div>
				)}
			</a>
		</nav>
	)
}

export default NavBar
