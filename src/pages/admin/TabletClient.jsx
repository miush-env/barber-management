import NavBar from '@components/NavBar'
import CardClient from '@components/ClientTablet/CardClient'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { ChevronLeft } from 'lucide-react'

function TabletClient() {
	const navigate = useNavigate()
	const [search, setSearch] = useState('')
	const [clients, setClients] = useState([])

	useEffect(() => {
		const clients = async () => {
			try {
				const res = await fetch('http://localhost:3000/api/users/clerk')
				const data = await res.json()
				setClients(data)
			} catch (error) {
				console.log(error)
			}
		}

		clients()
	}, [])

	const userClient = clients.filter(
		(client) => client.private_metadata?.role !== 'owner',
	)

	const filteredClients = userClient.filter((client) => {
		const name = client.first_name + ' ' + client.last_name
		return name.toLowerCase().includes(search.toLowerCase())
	})

	return (
		<main className='relative min-h-screen overflow-hidden bg-[#141419] pb-20'>
			<div className='pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.09),transparent_60%)]' />
			<div className='pointer-events-none fixed top-[-12%] left-1/2 -translate-x-1/2 h-[560px] w-[780px] rounded-full bg-blue-500/[0.1] blur-[170px] animate-[pulseSoft_9s_ease-in-out_infinite]' />
			<div className='pointer-events-none fixed bottom-0 -right-20 h-[400px] w-[400px] rounded-full bg-[#e3b869]/[0.06] blur-[150px]' />

			<header className='relative z-10 flex items-center border-b border-white/[0.12] bg-gradient-to-b from-[#191a1e] via-[#1e1f24] to-[#141519] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'>
				<span
					onClick={() => navigate('/inicio')}
					className='cursor-pointer p-1 rounded-full hover:bg-white/[0.08] active:bg-white/[0.08] transition-colors'
				>
					<ChevronLeft className='w-6 h-6 text-white/70' />
				</span>
				<h1 className='text-xl font-bold text-white/90 text-center flex-1'>
					Clientes
				</h1>
			</header>

			<section className='relative z-10 p-4'>
				<label className='relative block h-11'>
					<input
						type='text'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className='peer h-11 w-full rounded-xl border border-white/[0.14] bg-white/[0.05] backdrop-blur-xl p-2 pr-12 text-white/85 placeholder-white/30 outline-none transition-colors duration-200 focus:border-[#e3b869]/40'
						placeholder='Buscar Cliente'
					/>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='absolute right-3 top-1/2 -translate-y-1/2 text-white/30 transition-colors duration-200 peer-focus:text-[#e3b869]'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<path d='M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
						<path d='M21 21l-6 -6' />
					</svg>
				</label>
			</section>

			<section className='relative z-10 flex flex-col gap-4 p-4'>
				<div className='flex flex-col gap-4'>
					{filteredClients.length > 0 ? (
						filteredClients.map((client) => (
							<CardClient
								key={client.id}
								name={client.first_name + ' ' + client.last_name}
								photo={client.image_url}
								phone={client.unsafe_metadata?.phone || 'No tiene teléfono'}
								email={client.email_addresses[0]?.email_address}
								birthday={client.unsafe_metadata?.birthdate}
							/>
						))
					) : (
						<p className='text-center text-white/40'>
							No se encontró ningún cliente
						</p>
					)}
				</div>
			</section>

			<section className='fixed bottom-0 w-full px-5 z-20'>
				<NavBar />
			</section>
		</main>
	)
}

export default TabletClient
