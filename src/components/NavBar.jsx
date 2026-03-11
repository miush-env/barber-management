function NavBar() {
  return (
		<nav className='flex *:text-black [&>a]:flex [&>a]:flex-col [&>a]:justify-center [&>a]:items-center [&>a>img]:w-6  w-full items-center px-6 h-14 justify-evenly bg-white border-b-2 border-t-gray-300 shadow-lg shadow-white text-white'>
			<a href='#' className=''>
				<img src='/src/assets/home.svg' alt='inicio' />
				<span>Inicio</span>
			</a>
			<a href='#'>
				<img src='/src/assets/calendar-week.svg' alt='calendario' />
				<span>Citas</span>
			</a>
			<a href='#'>
				<img src='/src/assets/users-group.svg' alt='clients' />
				<span>Clientes</span>
			</a>
			<a href='#'>
				<img src='/src/assets/user.svg' alt='perfil' />
				<span>Perfil</span>
			</a>
		</nav>
	)
}

export default NavBar