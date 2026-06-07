import { Clock, Star, ChevronRight } from 'lucide-react'
import { Services } from '../../utils/services'
import { IconChevronRight, IconClock } from '@tabler/icons-react'
import parse from 'html-react-parser'

function ServiceCard({ title, description, length, id, safeDescription }) {
	const service = Services[id]

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
		<article className='flex gap-4 items-center rounded-lg border border-slate-200 bg-white p-4 transition-all '>
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
				<h2 className='text-start font-bold'>{title}</h2>
				<div className='flex items-center gap-1 font-semibold text-sm text-slate-600'>
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
				<p className='text-sm text-gray-500 text-start'>
					{parse(safeDescription)}
				</p>
			</section>

			<section className='flex items-center gap-2'>
				<span className='text-blue-700 font-bold text-lg'>
					$ {service.price}
				</span>

				<div className='p-1 rounded-full border border-slate-200 text-slate-600 active:border-blue-500 active:text-blue-600 transition-all duration-200'>
					<IconChevronRight stroke={2} />
				</div>
			</section>
		</article>
	)
}

export default ServiceCard
