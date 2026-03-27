function SocialAuth({name, icon}) {
  return (
		<button className='flex items-center justify-center rounded-lg p-2 shadow-md shadow-gray-400 bg-gray-100 w-12 h-12'>
			<img
				src={`./src/assets/${icon}.svg`}
				alt={name}
				className='w-6 h-6'
			/>
		</button>
	)
}

export default SocialAuth