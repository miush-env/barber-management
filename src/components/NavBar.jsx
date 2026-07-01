import { NavLink } from 'react-router'
import {
	IconHome,
	IconCalendarEvent,
	IconGroup,
	IconUser,
	IconAdd,
} from '../assets/icons/IconsCustom'
import NavItem from './NavItem'

import { useEffect, useState } from 'react'
import { useUser } from '@clerk/react'
import { checkRole } from '../utils/UserCheckRol'

function NavBar() {
	const [isAdmin, setIsAdmin] = useState(false)
	const { user } = useUser()

	useEffect(() => {
		const verifyRole = async () => {
			if (!user?.id) return

			const isOwner = await checkRole(user.id)
			setIsAdmin(isOwner)
		}

		verifyRole()
	}, [user])

	return (
		<nav
			className='
				*:font-semibold left-0 mb-5  shadow-slate-300 w-full  flex justify-around items-center
				h-14
				bg-white/95
				backdrop-blur-xl
				rounded-full
				border border-slate-200
				shadow-[0_10px_35px_rgba(15,23,42,0.08)]'
		>
			<NavItem to='/inicio' label='Inicio' Icon={IconHome} />

			<NavItem to='/ver-citas' label='Agenda' Icon={IconCalendarEvent} />

			<NavLink
				to='/crear-cita'
				className='bg-blue-700 rounded-full p-2 relative -translate-y-4'
			>
				<IconAdd className='w-9 stroke-white' />
			</NavLink>

			{isAdmin && (
				<NavItem to='/ver-clientes' label='Clientes' Icon={IconGroup} />
			)}

			<NavItem to='/perfil' label='Perfil' Icon={IconUser} />
		</nav>
	)
}

export default NavBar
