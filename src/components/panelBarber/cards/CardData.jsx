function CardData({ title, value, style }) {
	return (
		<section
			className={`flex-1 p-2 rounded-lg flex flex-col gap-1 border-2
				${
					style === 'earnings'
						? 'bg-green-300 border-green-500'
						: 'bg-blue-300 border-blue-500'
				}`}
		>
			<span className='font-semibold text-gray-800 text-sm'>{title}</span>

			<div className='flex items-center gap-3'>
				<picture
					className={`bg-linear-to-t ${style === 'earnings' ? 'from-green-400 to-green-500' : 'from-blue-400 to-blue-500'} rounded-full p-2`}
				>
					<img
						src={`./src/assets/${style === 'earnings' ? 'dollar' : 'users-group'}.svg`}
						alt='icon'
					/>
				</picture>
				<h2 className={`text-2xl font-bold tracking-wider ${style === 'earnings' ? 'text-black' : 'text-black'}`}>
					{value}
				</h2>
			</div>
		</section>
	)
}

export default CardData
