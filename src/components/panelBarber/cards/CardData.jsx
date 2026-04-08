import { HandCoins, Calendar } from 'lucide-react'

function CardData({ title, value, style }) {
	return (
		<section
			className={`flex-1 rounded-md flex flex-col gap-1 p-4
				${style === 'earnings' ? 'bg-green-200' : 'bg-blue-200'}	
			`}
		>
			<div className='flex items-center gap-3'>
				<picture>
					{style === 'earnings' ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='35'
							height='35'
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							viewBox='0 0 24 24'
							className='stroke-green-800'
						>
							<path fill='none' stroke='none' d='M0 0h24v24H0z' />
							<path d='M7 15H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3' />
							<path d='M7 10a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z' />
							<path d='M12 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0' />
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='35'
							height='35'
							fill='currentColor'
							viewBox='0 0 24 24'
							className='fill-blue-800'
						>
							<path fill='none' d='M0 0h24v24H0z' />
							<path d='M16 2a1 1 0 0 1 .993.883L17 3v1h1a3 3 0 0 1 2.995 2.824L21 7v12a3 3 0 0 1-2.824 2.995L18 22H6a3 3 0 0 1-2.995-2.824L3 19V7a3 3 0 0 1 2.824-2.995L6 4h1V3a1 1 0 0 1 1.993-.117L9 3v1h6V3a1 1 0 0 1 1-1m3 8H5v8.625c0 .705.386 1.286.883 1.366L6 20h12c.513 0 .936-.53.993-1.215l.007-.16zm-9 4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z' />
						</svg>
					)}
				</picture>
				<h2
					className={`text-2xl font-bold tracking-wider ${style === 'earnings' ? 'text-green-900' : 'text-blue-900'}`}
				>
					{value}
				</h2>
			</div>

			<span className={`font-bold uppercase text-xs ${style === 'earnings' ? 'text-green-800' : 'text-blue-800' }`}>{title}</span>
		</section>
	)
}

export default CardData
