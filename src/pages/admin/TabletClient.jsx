import NavBar from '@components/NavBar'
import CardClient from '@components/ClientTablet/CardClient'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { ChevronLeft } from 'lucide-react'

function TabletClient() {
	const navigate = useNavigate()
	const [search, setSearch] = useState('')
	const [clients, setClients] = useState([])

	useEffect(()=>{
		const clients = async () => {
			try {
				const res = await fetch('http://localhost:3000/api/users')
				const data = await res.json()
				setClients(data)
			
			} catch (error) {
				console.log(error)
			}
		}

		clients()
	},[])

	const userClient = clients

	const filteredClients = userClient.filter((client) =>{
		const name = client.firstName + ' ' + client.lastName
		return name.toLowerCase().includes(search.toLowerCase())
	}
	)

	return (
		<main className='min-h-screen bg-gray-50 pb-20'>
			<header className='flex items-center border-b border-gray-300 bg-white p-4'>
				<span onClick={() => navigate('/inicio')} className='cursor-pointer p-1 active:bg-slate-200 rounded-full transition-colors'>
					<ChevronLeft className="w-6 h-6 text-slate-600" />	
				</span>
				<h1 className='text-xl font-bold text-slate-800 text-center flex-1'>Clientes</h1>
			</header>

			<section className='p-4'>
				<label className='relative block h-11'>
					<input
						type='text'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className='peer h-11 w-full rounded-lg border border-gray-400 p-2 pr-12 text-gray-500 outline-none transition-colors duration-200 focus:border-gray-700 focus:text-gray-800'
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
						className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-200 peer-focus:text-gray-600'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<path d='M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
						<path d='M21 21l-6 -6' />
					</svg>
				</label>
			</section>

			<section className='flex flex-col gap-4 p-4'>
				<div className='flex flex-col gap-4'>
					{filteredClients.length > 0 ? (
						filteredClients.map((client) => (
							<CardClient
								key={client.id}
								name={client.firstName + ' ' + client.lastName}
								photo={client.imageUrl}
								phone={client.phone}
								email={client.email}
								point={client.points}
								birthday={client.birthday}
							/>
						))
					) : (
						<p className='text-center text-gray-500'>
							No se encontró ningún cliente
						</p>
					)}
				</div>
			</section>

			<section className='fixed bottom-0 w-full px-5'>
				<NavBar />
			</section>
		</main>
	)
}

export default TabletClient
