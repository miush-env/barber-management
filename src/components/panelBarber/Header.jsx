import { useUser } from '@clerk/react'
import { Bell } from 'lucide-react'
import { IconCalendarTime } from '@tabler/icons-react'

function Header() {
	const { user } = useUser()
	const hour = new Date().toLocaleTimeString('es-ES', {
		weekday: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	})

	return (
		<header className='relative overflow-hidden bg-gradient-to-b from-[#191a1e] via-[#1e1f24] to-[#141519] px-6 pt-8 pb-10 border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.5)]'>
			<div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.05),transparent_55%)]' />

			<div className='relative flex items-center justify-between gap-4'>
				<div className='flex items-center gap-4'>
					<div className='relative'>
						<img
							src={user.imageUrl}
							alt={user.fullName}
							className='w-12 h-12 rounded-full border border-[#e3b869]/30 object-cover shadow-lg shadow-black/40'
						/>
						<div className='absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400/80 border-2 border-[#151517]' />
					</div>
					<div>
						<h1 className='text-lg text-white/90 font-bold tracking-tight'>
							Hola,{' '}
							<span className='text-transparent bg-clip-text bg-gradient-to-r from-[#f6dfa8] to-[#b8863f] drop-shadow-[0_0_10px_rgba(227,184,105,0.35)]'>
								{user.fullName}
							</span>{' '}
							👋
						</h1>
						<div className='flex gap-1.5 items-center mt-1'>
							<IconCalendarTime
								stroke={2}
								size={16}
								className='text-white/30'
							/>
							<span className='text-xs text-white/45 font-semibold capitalize'>
								{hour}
							</span>
						</div>
					</div>
				</div>

				<button className='relative flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.07] active:bg-white/[0.07] transition-colors'>
					<Bell size={18} className='text-white/60' />
					<span className='absolute top-2 right-2.5 w-1.5 h-1.5 rounded-full bg-[#e3b869] shadow-[0_0_8px_rgba(227,184,105,0.7)]' />
				</button>
			</div>
		</header>
	)
}

export default Header
