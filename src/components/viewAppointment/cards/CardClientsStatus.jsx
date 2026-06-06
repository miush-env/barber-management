import { BarChart3, CheckCircle2, XCircle } from 'lucide-react'
import { GetBookingsStatusAdmin } from '../../../utils/Bookings'

function CardClientsStatus({ title, count = 0, style = 'none' }) {
	const colors_icon = [
		{
			icon: <BarChart3 className='w-5 h-5 text-blue-600' />,
			color: 'bg-blue-100/60 text-blue-600 border-blue-100',
			bgIcon: 'bg-blue-300/60',
		},
		{
			icon: <CheckCircle2 className='w-5 h-5 text-emerald-600' />,
			color: 'bg-emerald-100/60 text-emerald-600 border-emerald-100',
			bgIcon: 'bg-emerald-300/60',
		},
		{
			icon: <XCircle className='w-5 h-5 text-rose-600' />,
			color: 'bg-rose-100/60 text-rose-600 border-rose-100',
			bgIcon: 'bg-rose-300/60',
		},
	]

	let styleComponent = null

	if (style == 'totals') {
		styleComponent = colors_icon[0]
	} else if (style == 'served') {
		styleComponent = colors_icon[1]
	} else {
		styleComponent = colors_icon[2]
	}

	return (
		<div
			className={`flex flex-col items-start justify-center p-4 rounded-2xl border ${styleComponent.color} transition-transform active:scale-95`}
		>
			<div className={`mb-2 p-2 rounded-full ${styleComponent.bgIcon}`}>
				{styleComponent.icon}
			</div>
			<span className='text-2xl font-black'>{count}</span>
			<span className='text-xs font-bold tracking-wider text-gray-500'>
				{title}
			</span>
		</div>
	)
}

export default CardClientsStatus
