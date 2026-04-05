import { getCalApi } from '@calcom/embed-react'
const CALL_LINK = import.meta.env.VITE_CALL_LINK

export const serviceCorte = async ({name, email}) => {
	const cal = await getCalApi({ namespace: 'corte-clasico' })
	cal('modal', {
		calLink: `${CALL_LINK}/corte-clasico?name=${name}&email=${email}`,
		config: {
			layout: 'month_view',
		},
	})
}

export const serviceCorteBarba = async ({name, email}) => {
		const cal = await getCalApi({ namespace: 'corte-clasico-barba' })
		cal('modal', {
			calLink: `${CALL_LINK}/corte-clasico-barba?name=${name}&email=${email}`,
			config: {
				layout: 'month_view',
			},
		})
	}

export const serviceGlobal = async ({name, email}) => {
		const cal = await getCalApi({ namespace: 'global' })
		cal('modal', {
			calLink: `${CALL_LINK}/global?name=${name}&email=${email}`,
			config: {
				layout: 'month_view',
			},
		})
	}

export const serviceSoloPuntas = async ({name, email}) => {
		const cal = await getCalApi({ namespace: 'tinte-solo-puntas' })
		cal('modal', {
			calLink: `${CALL_LINK}/tinte-solo-puntas?name=${name}&email=${email}`,
			config: {
				layout: 'month_view',
			},
		})
	}