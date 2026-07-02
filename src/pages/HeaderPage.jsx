import { IconChevronLeft } from '@tabler/icons-react'
import { useNavigate } from 'react-router'

function HeaderPage({ path, name, titleClassName = 'text-white/90' }) {
	const navigate = useNavigate()

	return (
		<header className='flex items-center border-b border-white/[0.12] bg-gradient-to-b from-[#191a1e] via-[#1e1f24] to-[#141519] relative overflow-hidden p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'>
			<div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.05),transparent_55%)]' />
			<button
				className='relative p-1 rounded-full hover:bg-white/[0.08] active:bg-white/[0.08] transition-colors'
				onClick={() => {
					navigate(path)
				}}
			>
				<IconChevronLeft className='text-white/70' />
			</button>
			<h1
				className={`relative text-2xl font-bold text-center flex-1 ${titleClassName}`}
			>
				{name}
			</h1>
		</header>
	)
}

export default HeaderPage
