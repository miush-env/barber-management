import { HandCoins, Calendar } from 'lucide-react'
import { IconCalendarEventFilled, IconCash } from '@tabler/icons-react'

function CardData({ title, value, style }) {
	return (
		<section
			className={`flex-1 rounded-md flex flex-col gap-1 p-4
				${style === 'earnings' ? 'bg-green-100/60' : 'bg-blue-100/60'}	
			`}
		>
			<div className='flex items-center gap-3 mb-2'>
				<picture
					className={` ${style === 'earnings' ? 'bg-green-300/60' : 'bg-blue-300/60'} p-2 rounded-md`}
				>
					{style === 'earnings' ? (
						<IconCash color='#007a55' size={30} />
					) : (
						<IconCalendarEventFilled color='#1447e6' size={30} />
					)}
				</picture>
				<h2
					className={`text-2xl font-bold tracking-wider ${style === 'earnings' ? 'text-green-700' : 'text-blue-700'}`}
				>
					{value}
				</h2>
			</div>

			<span
				className={`font-bold uppercase text-xs ${style === 'earnings' ? 'text-green-800' : 'text-blue-800'}`}
			>
				{title}
			</span>
		</section>
	)
}

export default CardData
