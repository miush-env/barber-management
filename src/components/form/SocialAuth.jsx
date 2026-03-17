function SocialAuth({name, icon}) {
  return (
		<button className='flex px-2 w-full gap-2 group items-center active:bg-gray-200/45 rounded-xl h-14 transition-colors duration-300 '>
			<img
				src={`./src/assets/${icon}.svg`}
				alt={name}
				className='w-6'
			/>
			<span className='text-lg font-bold text-gray-700 group-active:text-gray-500 bg-transparent transition-colors duration-300'>
				Iniciar con {name}
			</span>
		</button>
	)
}

export default SocialAuth