function Header ({name, photo, notifications}) {
  return (
		// border-b-2 border-b-gray-300
		<header className='flex w-full items-center justify-between px-6 h-24 '>
			<div className='flex gap-2 items-center'>
				<img
					src={photo}
					alt={name}
					className='rounded-full w-14 border-2 border-gray-400'
				/>
				<div className=''>
					<span className='text-sm text-gray-600 font-semibold'>
						07 vie Mar 2026
					</span>
					<h1 className='text-3xl text-black font-bold'>{name}</h1>
				</div>
			</div>
			<div className='relative'>
				<span
					className=' absolute -top-1 -right-1
    flex items-center justify-center
    w-5 h-5
    text-xs font-semibold
    text-white bg-red-600
    rounded-full'
				>
					{notifications}
				</span>
				<img src='./src/assets/bell.svg' alt='icon bell' className='w-7' />
			</div>
		</header>
	)
}

export default Header