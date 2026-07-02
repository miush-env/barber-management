import { SignOutButton } from '@clerk/react'
import { LogOut } from 'lucide-react'

function AccountSettings() {
	return (
		<section>
			<SignOutButton>
				<div className='flex gap-4 rounded-2xl border border-rose-400/15 bg-rose-400/[0.06] backdrop-blur-xl items-center px-5 py-3 cursor-pointer hover:bg-rose-400/[0.1] transition-colors'>
					<LogOut className='text-rose-400' />
					<span className='uppercase text-rose-300 font-bold text-sm'>
						Cerrar Sesion
					</span>
				</div>
			</SignOutButton>
		</section>
	)
}

export default AccountSettings
