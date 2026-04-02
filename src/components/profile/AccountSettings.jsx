import { useNavigate } from 'react-router'
import { SignOutButton } from '@clerk/react'

function AccountSettings() {
  const navigate = useNavigate()

  return (
		<section>
			<div className='flex gap-2 bg-white p-2 rounded-lg items-center'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
					className='stroke-red-500'
				>
					<path stroke='none' d='M0 0h24v24H0z' fill='none' />
					<path d='M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2' />
					<path d='M9 12h12l-3 -3' />
					<path d='M18 15l3 -3' />
				</svg>
				{/* onClick={()=>{	navigate('/')}} */}
				<span className='uppercase text-red-500 font-bold text-sm'>
					 <SignOutButton>
				Cerrar Sesion
			 </SignOutButton>
				</span>
			</div>

		</section>
	)
}

export default AccountSettings