import { serviceCorte, serviceCorteBarba, serviceSoloPuntas, serviceGlobal } from '../../../utils/ServiceCal'

// import { getCalApi } from '@calcom/embed-react'
export default function Calendar() {
	return (
		<div className='flex flex-col items-center p-2 gap-2'>
			<button
				onClick={serviceCorte}
				className='bg-blue-500 text-white p-2 rounded-md font-semibold text-md'
			>
				Corte clásico
			</button>

			<button
				onClick={serviceCorteBarba}
				className='bg-blue-500 text-white p-2 rounded-md font-semibold text-md'
			>
				Corte + barba
			</button>

			<button
				onClick={serviceSoloPuntas}
				className='bg-blue-500 text-white p-2 rounded-md font-semibold text-md'
			>
				Tinte {`(solo puntas)`}
			</button>

			<button
				onClick={serviceGlobal}
				className='bg-blue-500 text-white p-2 rounded-md font-semibold text-md'
			>
				Tinte Global
			</button>

			
		</div>
	)
}
