import { NavLink } from 'react-router'

export default function NavItem({ to, label, Icon }) {
	return (
		<NavLink to={to}>
			{({ isActive }) => (
				<div className='relative flex flex-col items-center justify-center min-w-16'>
					<div
						className={`
							absolute -top-3 h-1 rounded-full bg-blue-600
							transition-all duration-300
							${isActive ? 'w-10 opacity-100' : 'w-0 opacity-0'}
						`}
					/>

					<Icon
						className={`
							transition-all duration-300
							${isActive ? 'fill-blue-600 scale-110 -translate-y-1' : 'fill-slate-400'}
						`}
					/>
				</div>
			)}
		</NavLink>
	)
}
