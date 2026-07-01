export const getService = (eventTypeId) => Services[eventTypeId]

export const Services = {
	5065863: {
		id: 5065863,
		slug: 'corte-clasico-barba',
		name: 'Corte Clasico + Barba',
		price: 10000,
		imgUrl: '/serviceImage/corte-clasico.jpg',
	},
	5065774: {
		id: 5065774,
		slug: 'corte-clasico',
		name: 'Corte Clasico',
		price: 8000,
		imgUrl: '/serviceImage/corte-clasico.jpg',
	},
	5065846: {
		id: 5065846,
		slug: 'barba',
		name: 'Barba',
		price: 4000,
		imgUrl: '/serviceImage/barba.jpg',
	},
	5065827: {
		id: 5065827,
		slug: 'tinte-solo-puntas',
		name: 'Tinte (Solo Puntas)',
		price: 20000,
		imgUrl: '/serviceImage/tinte-solo-puntas.png',
	},
	5065815: {
		id: 5065815,
		slug: 'global',
		name: 'Global',
		price: 25000,
		imgUrl: '/serviceImage/global.jpg',
	},
}
