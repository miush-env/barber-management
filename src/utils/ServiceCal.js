import { getCalApi } from '@calcom/embed-react'
const CALL_LINK = import.meta.env.VITE_CALL_LINK

export const serviceCorte = async () => {
		const cal = await getCalApi({ namespace: 'corte-clasico' })
		cal('modal', {
			calLink: `${CALL_LINK}/corte-clasico`,
			config: {
				layout: 'month_view',
			},
		})
	}

export const serviceCorteBarba = async () => {
		const cal = await getCalApi({ namespace: 'corte-clasico-barba' })
		cal('modal', {
			calLink: `${CALL_LINK}/corte-clasico-barba`,
			config: {
				layout: 'month_view',
			},
		})
	}

export const serviceGlobal = async () => {
		const cal = await getCalApi({ namespace: 'global' })
		cal('modal', {
			calLink: `${CALL_LINK}/global`,
			config: {
				layout: 'month_view',
			},
		})
	}

export const serviceSoloPuntas = async () => {
		const cal = await getCalApi({ namespace: 'tinte-solo-puntas' })
		cal('modal', {
			calLink: `${CALL_LINK}/tinte-solo-puntas`,
			config: {
				layout: 'month_view',
			},
		})
	}