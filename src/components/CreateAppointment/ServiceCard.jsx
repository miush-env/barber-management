import { Clock, Star, ChevronRight } from 'lucide-react'
import { getService } from '../../utils/services'
import { IconChevronRight, IconClock } from '@tabler/icons-react'
import parse from 'html-react-parser'

function ServiceCard({ title, description, length, id, safeDescription }) {
	const service = getService(id)

	const formatMinutes = (totalMinutes) => {
		const minutesNum = Number(totalMinutes)

		if (isNaN(minutesNum) || minutesNum <= 0)
			return { text: '0 min', iso: 'PT0M' }

		const hours = Math.floor(minutesNum / 60)
		const minutes = minutesNum % 60

		const textParts = []
		if (hours > 0) textParts.push(`${hours}h`)
		if (minutes > 0 || hours === 0) textParts.push(`${minutes} min`)

		let iso = 'PT'
		if (hours > 0) iso += `${hours}H`
		if (minutes > 0 || hours === 0) iso += `${minutes}M`

		return {
			text: textParts.join(' '),
			iso: iso,
		}
	}

	return (
		<article className='flex gap-4 items-center rounded-2xl border border-white/[0.14] bg-white/[0.05] backdrop-blur-xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all'>
			<section className='max-h-20 max-w-20 object-cover rounded-lg'>
				<picture className=''>
					{service?.imgUrl && (
						<img
							src={service.imgUrl}
							alt={title}
							className='max-h-20 max-w-20 object-cover rounded-lg'
						/>
					)}
				</picture>
			</section>

			<section className='flex flex-col flex-1 items-start'>
				<h2 className='text-start font-bold text-white/90'>{title}</h2>
				<div className='flex items-center gap-1 font-semibold text-sm text-white/45'>
					<IconClock stroke={1.75} size={18} />
					{(() => {
						const { text, iso } = formatMinutes(length)
						return (
							<time dateTime={iso} className=''>
								{text}
							</time>
						)
					})()}
				</div>
				<p className='text-sm text-white/35 text-start'>
					{parse(safeDescription)}
				</p>
			</section>

			<section className='flex items-center gap-2'>
				<span className='text-[#e3b869] font-bold text-lg drop-shadow-[0_0_6px_rgba(227,184,105,0.25)]'>
					$ {service.price}
				</span>

				<div className='p-1 rounded-full border border-white/[0.14] text-white/50 active:border-[#e3b869]/40 active:text-[#e3b869] transition-all duration-200'>
					<IconChevronRight stroke={2} />
				</div>
			</section>
		</article>
	)
}

export default ServiceCard
