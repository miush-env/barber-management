import { IconChevronLeft } from '@tabler/icons-react'
import { useNavigate } from 'react-router'

function HeaderPage({ path, name }) {
	const navigate = useNavigate()

	return (
		<header className='flex items-center border-b bg-linear-to-br from-blue-700 via-blue-600 to-blue-500 relative overflow-hidden p-4 rounded-b-[32px]'>
			<div className='absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full' />
			<button
				className='p-1 active:bg-blue-700/90 rounded-full transition-colors'
				onClick={() => {
					navigate(path)
				}}
			>
				<IconChevronLeft color='#fff' />
			</button>
			<h1 className='text-2xl font-bold text-white text-center flex-1'>
				{name}
			</h1>
		</header>
	)
}

export default HeaderPage
