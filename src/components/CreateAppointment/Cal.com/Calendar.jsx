/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

import { getCalApi } from '@calcom/embed-react'
export default function Calendar() {
	const openCorte = async () => {
		const cal = await getCalApi({ namespace: 'corte-clasico' })
		cal('modal', {
			calLink: 'multipurpose-ki7ln0/corte-clasico',
			config: {
				layout: 'month_view',
			},
		})
	}

	const openCorteBarba = async () => {
		const cal = await getCalApi({ namespace: 'corte-clasico-barba' })
		cal('modal', {
			calLink: 'multipurpose-ki7ln0/corte-clasico-barba',
			config: {
				layout: 'month_view',
			},
		})
	}

	return (
		<div className='flex flex-col items-center p-2 gap-2'>
			<button
				onClick={openCorte}
				className='bg-blue-500 text-white p-2 rounded-md font-semibold text-md'
			>
				Corte clásico
			</button>

			<button
				onClick={openCorteBarba}
				className='bg-blue-500 text-white p-2 rounded-md font-semibold text-md'
			>
				Corte + barba
			</button>
		</div>
	)
}
