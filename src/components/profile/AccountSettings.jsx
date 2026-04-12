import { SignOutButton } from '@clerk/react'
import { LogOut } from 'lucide-react'

function AccountSettings() {
	return (
		<section>
			<SignOutButton>
				<div className='flex gap-4 bg-white p-2 rounded-lg items-center px-5 py-3'>
					<LogOut className='text-red-500' />
					<span className='uppercase text-red-500 font-bold text-sm'>
						Cerrar Sesion
					</span>
				</div>
			</SignOutButton>
		</section>
	)
}

export default AccountSettings
