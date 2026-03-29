import { getCalApi } from '@calcom/embed-react'

export const serviceCorte = async () => {
		const cal = await getCalApi({ namespace: 'corte-clasico' })
		cal('modal', {
			calLink: 'multipurpose-ki7ln0/corte-clasico',
			config: {
				layout: 'month_view',
			},
		})
	}

export const serviceCorteBarba = async () => {
		const cal = await getCalApi({ namespace: 'corte-clasico-barba' })
		cal('modal', {
			calLink: 'multipurpose-ki7ln0/corte-clasico-barba',
			config: {
				layout: 'month_view',
			},
		})
	}

export const serviceGlobal = async () => {
		const cal = await getCalApi({ namespace: 'global' })
		cal('modal', {
			calLink: 'multipurpose-ki7ln0/global',
			config: {
				layout: 'month_view',
			},
		})
	}

export const serviceSoloPuntas = async () => {
		const cal = await getCalApi({ namespace: 'tinte-solo-puntas' })
		cal('modal', {
			calLink: 'multipurpose-ki7ln0/tinte-solo-puntas',
			config: {
				layout: 'month_view',
			},
		})
	}