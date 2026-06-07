import NavBar from '../components/NavBar'
import ServiceCard from '@components/CreateAppointment/ServiceCard'
import ButtonCallCal from '../components/CreateAppointment/Cal.com/ButtonCallCal'
import {
	serviceCorte,
	serviceCorteBarba,
	serviceSoloPuntas,
	serviceGlobal,
	serviceBarba,
} from '../utils/ServiceCal'
import { getNameEvent } from '../utils/Bookings'
import { useEffect, useMemo, useState } from 'react'
import HeaderPage from './HeaderPage'

import { IconScissors, IconMoustache, IconDroplet } from '@tabler/icons-react'

function CreateAppointment() {
	const [nameEvent, setNameEvent] = useState([])
	const [filterText, setFilterText] = useState('')
	const [activeTag, setActiveTag] = useState('')

	const functionMapper = {
		'corte-clasico': serviceCorte,
		'corte-clasico-barba': serviceCorteBarba,
		'tinte-solo-puntas': serviceSoloPuntas,
		global: serviceGlobal,
		barba: serviceBarba,
	}

	useEffect(() => {
		const fetchNameEvent = async () => {
			try {
				const res = await getNameEvent()
				if (res) {
					setNameEvent(res)
				}
			} catch (error) {
				console.error('Error en la petición:', error)
			}
		}
		fetchNameEvent()
	}, [])

	const buttonFilters = [
		{ label: 'color', value: 'color', icon: <IconDroplet size={16} /> },
		{ label: 'barba', value: 'barba', icon: <IconMoustache size={16} /> },
		{ label: 'cortes', value: 'corte', icon: <IconScissors size={16} /> },
	]

	// Mapeo de filtros a slugs de servicios
	const filterMapping = {
		color: ['tinte-solo-puntas', 'global'],
		barba: ['barba'],
		corte: ['corte-clasico', 'corte-clasico-barba'],
	}

	const filteredEvents = useMemo(() => {
		const normalizedFilter = filterText.trim().toLowerCase()

		// Si se seleccionó un botón de filtro (activeTag está activo)
		if (activeTag && filterMapping[filterText]) {
			const allowedSlugs = filterMapping[filterText]
			return nameEvent.filter((event) => allowedSlugs.includes(event.slug))
		}

		// Si no hay filtro, mostrar todos
		if (!normalizedFilter) {
			return nameEvent
		}

		// Búsqueda por texto
		return nameEvent.filter((event) => {
			const text = [event.title, event.description, event.slug]
				.filter(Boolean)
				.join(' ')
				.toLowerCase()
			return text.includes(normalizedFilter)
		})
	}, [filterText, nameEvent, activeTag])

	const handleTagClick = (filterValue, label) => {
		setFilterText(filterValue)
		setActiveTag(label)
	}

	const handleInputChange = (event) => {
		setFilterText(event.target.value)
		setActiveTag('')
	}

	return (
		<main className='bg-slate-50 min-h-screen pb-16'>
			<HeaderPage path='/inicio' name='Agendar Cita' />

			<div className='bg-slate-50'>
				<section className='mb-6' aria-labelledby='services-title'>
					<div className='flex flex-col gap-4 p-4'>
						<div className='flex flex-col gap-3'>
							<input
								id='service-filter'
								type='text'
								value={filterText}
								onChange={handleInputChange}
								placeholder='Escribe para filtrar servicios...'
								className='rounded-2xl border border-slate-100 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none transition-all'
							/>

							<div className='flex flex-wrap gap-3'>
								{buttonFilters.map((button) => (
									<button
										key={button.label}
										type='button'
										className={`rounded-full flex gap-2 items-center border px-4 py-2 text-sm font-medium transition-all duration-200 ${
											activeTag === button.label
												? 'border-blue-600 bg-blue-600 text-white shadow-sm'
												: 'border-slate-200 bg-white text-slate-600 hover:border-blue-500 hover:text-blue-600'
										}`}
										onClick={() => handleTagClick(button.value, button.label)}
									>
										{button.icon}
										<span>{button.label}</span>
									</button>
								))}
							</div>
						</div>
						{filteredEvents.length === 0 ? (
							<div className='rounded-2xl border border-dashed border-slate-200 bg-white/80 p-6 text-center text-sm text-slate-500'>
								No se encontraron servicios que coincidan con la búsqueda.
							</div>
						) : (
							<div className='flex flex-col gap-4'>
								{filteredEvents.map((s, index) => {
									const calFunction = functionMapper[s.slug] || serviceCorte
									// console.log(s)
									return (
										<ButtonCallCal key={index} service={calFunction}>
											<ServiceCard {...s} />
										</ButtonCallCal>
									)
								})}
							</div>
						)}
					</div>
				</section>
			</div>

			<section className='fixed bottom-0 w-full px-5'>
				<NavBar />
			</section>
		</main>
	)
}

export default CreateAppointment
