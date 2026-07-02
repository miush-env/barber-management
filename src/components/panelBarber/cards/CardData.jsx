import { IconCalendarEventFilled, IconCash } from '@tabler/icons-react'

function CardData({ title, value, style }) {
	const isEarnings = style === 'earnings'

	return (
		<section
			className='relative flex-1 overflow-hidden rounded-2xl flex flex-col gap-1 p-4 border border-white/[0.16] bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.4),0_0_20px_rgba(255,255,255,0.04)]'
		>
			<div className='relative flex items-center gap-3 mb-2'>
				<picture
					className={`p-2 rounded-xl border ${
						isEarnings
							? 'bg-emerald-400/[0.08] border-emerald-400/15'
							: 'bg-[#e3b869]/[0.08] border-[#e3b869]/20'
					}`}
				>
					{isEarnings ? (
						<IconCash color='#5eb894' size={24} />
					) : (
						<IconCalendarEventFilled color='#e3b869' size={24} />
					)}
				</picture>
				<h2 className='text-2xl font-bold tracking-wider text-white/90'>
					{value}
				</h2>
			</div>

			<span className='relative font-semibold uppercase text-[11px] tracking-wide text-white/40'>
				{title}
			</span>
		</section>
	)
}

export default CardData
