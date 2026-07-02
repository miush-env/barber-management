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
				*:font-semibold left-0 mb-5 w-full flex justify-around items-center
				h-16
				bg-[#16161a]/85
				backdrop-blur-2xl
				rounded-full
				border border-white/[0.16]
				shadow-[0_15px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(255,255,255,0.04)]'
		>
			<NavItem to='/inicio' label='Inicio' Icon={IconHome} />

			<NavItem to='/ver-citas' label='Agenda' Icon={IconCalendarEvent} />

			<NavLink
				to='/crear-cita'
				className='flex items-center justify-center bg-gradient-to-b from-[#232326] to-[#18181a] rounded-full p-2.5 relative -translate-y-5 border border-[#e3b869]/40 shadow-[0_10px_25px_rgba(0,0,0,0.55),0_0_18px_rgba(227,184,105,0.25)]'
			>
				<IconAdd className='w-8 stroke-[#e3b869]' />
			</NavLink>

			{isAdmin && (
				<NavItem to='/ver-clientes' label='Clientes' Icon={IconGroup} />
			)}

			<NavItem to='/perfil' label='Perfil' Icon={IconUser} />
		</nav>
	)
}

export default NavBar
