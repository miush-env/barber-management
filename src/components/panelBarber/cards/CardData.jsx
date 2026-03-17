function CardData({title, value, style}) {

  return (
		<section
			// ${style === 'clients' ? 'from-gray-200 to-gray-300' : 'from-amber-200 to-amber-300'}
			className='flex-1 bg-white p-2 rounded-lg flex flex-col gap-1'
		>
			<span className='font-medium text-gray-500 text-sm'>{title}</span>
			<h2 className='text-xl font-bold tracking-wider flex items-center gap-3'>
				<picture
					className={`bg-linear-to-t ${style === 'clients' ? 'from-blue-400 to-blue-500' : 'from-green-400 to-green-500'} rounded-full p-2`}
				>
					<img
						src={`./src/assets/${style === 'earnings' ? 'dollar.svg' : 'users-group.svg'}`}
						alt='icon'
					/>
				</picture>
				<span
					className={`${style === 'earnings' ? 'text-green-600' : 'text-blue-600'}`}
				>
					{value}
				</span>
			</h2>
		</section>
	)
}

export default CardData