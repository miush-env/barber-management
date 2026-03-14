
  function CardClientsStatus({title, value = 0, style = 'none'}) {
  return (
		<section
			className={`
      flex-1 h-20 rounded-md flex flex-col justify-center items-center border bg-white
      ${style === 'complete' ? 'border-green-500' : 'border-gray-400'}
      ${style === 'delete' ? 'border-red-500' : 'border-gray-400'}
    `}
		>
			<span
				className={`
        font-bold text-xl
        ${style === 'complete' ? 'text-green-600' : 'text-gray-600'}
        ${style === 'delete' ? 'text-red-600' : 'text-gray-600'}
        `}
			>
				{value}
			</span>
			<h3 className='text-sm font-semibold text-gray-600'>{title}</h3>
		</section>
	)
}

export default CardClientsStatus