import { BarChart3, CheckCircle2, XCircle } from 'lucide-react'
import { GetBookingsStatusAdmin } from '../../../utils/Bookings'

function CardClientsStatus({ title, count = 0, style = 'none' }) {
	const colors_icon = [
		{
			icon: <BarChart3 className='w-5 h-5 text-blue-300' />,
			color: 'bg-white/[0.05] text-white/85 border-white/[0.14]',
			bgIcon: 'bg-blue-400/10',
		},
		{
			icon: <CheckCircle2 className='w-5 h-5 text-emerald-300' />,
			color: 'bg-white/[0.05] text-white/85 border-white/[0.14]',
			bgIcon: 'bg-emerald-400/10',
		},
		{
			icon: <XCircle className='w-5 h-5 text-rose-300' />,
			color: 'bg-white/[0.05] text-white/85 border-white/[0.14]',
			bgIcon: 'bg-rose-400/10',
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
			className={`flex flex-col items-start justify-center p-4 rounded-2xl border backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-transform active:scale-95 ${styleComponent.color}`}
		>
			<div className={`mb-2 p-2 rounded-full ${styleComponent.bgIcon}`}>
				{styleComponent.icon}
			</div>
			<span className='text-2xl font-black text-white/90'>{count}</span>
			<span className='text-xs font-bold tracking-wider text-white/40'>
				{title}
			</span>
		</div>
	)
}

export default CardClientsStatus
