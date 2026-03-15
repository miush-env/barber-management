function CardClient({
	name,
	photo,
	phone,
	email,
	point,
	birthday,
}) {
	return (
		<article className='flex bg-gray-200/60 rounded-xl h-36 p-4 gap-4'>
			<section>
				<picture className='bg-gray-300'>
					<img src={photo} alt={name} className='rounded-full w-14' />
				</picture>
			</section>
			<section className='flex flex-col gap-1 w-full'>
				<div className='flex justify-between items-center gap-2'>
					<h2 className='text-lg font-bold'>{name}</h2>
					<span className="py-1 px-2 text-center bg-blue-500 rounded-full font-semibold text-white">{point} pts</span>
				</div>
				<div className='flex items-center gap-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='#555'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
						class='icon icon-tabler icons-tabler-outline icon-tabler-phone'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2' />
					</svg>
					<span className='text-gray-500 text-sm font-semibold'>{phone}</span>
				</div>
				<div className='flex items-center gap-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='#555'
						class='icon icon-tabler icons-tabler-filled icon-tabler-mail'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<path d='M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z' />
						<path d='M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z' />
					</svg>
					<span className='text-gray-500 text-sm font-semibold'>{email}</span>
				</div>
				<div className='flex items-center gap-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='#555'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
						class='icon icon-tabler icons-tabler-outline icon-tabler-cake'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<path d='M3 20h18v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8' />
						<path d='M3 14.803c.312 .135 .654 .204 1 .197a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1c.35 .007 .692 -.062 1 -.197' />
						<path d='M12 4l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737' />
					</svg>
					<span className='text-gray-500 text-sm font-semibold'>
						{birthday}
					</span>
				</div>
			</section>
		</article>
	)
}

export default CardClient