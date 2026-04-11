export const IconHome = ({ fill = 'currentColor', className = '' }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			fill={fill}
			viewBox='0 -960 960 960'
			className={className}
		>
			<path d='M160-120v-480l320-240 320 240v480H560v-280H400v280z' />
		</svg>
	)
}

export const IconCalendarEvent = ({
	fill = 'currentColor',
	className = '',
}) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			fill={fill}
			viewBox='0 -960 960 960'
			className={className}
		>
			<path d='M509-269q-29-29-29-71t29-71 71-29 71 29 29 71-29 71-71 29-71-29M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80zm0-80h560v-400H200z' />
		</svg>
	)
}

export const IconGroup = ({ fill = 'currentColor', className = '' }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			fill={fill}
			viewBox='0 -960 960 960'
			className={className}
		>
			<path d='M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440t130 15.5T616-378q29 15 46.5 43.5T680-272v112zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120zM247-527q-47-47-47-113t47-113 113-47 113 47 47 113-47 113-113 47-113-47m466 0q-47 47-113 47-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81-14.5-81-41.5-71q14-5 28-6.5t28-1.5q66 0 113 47t47 113-47 113' />
		</svg>
	)
}

export const IconUser = ({ fill = 'currentColor', className = '' }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			fill={fill}
			className={className}
			viewBox='0 0 24 24'
		>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M12 2a5 5 0 1 1-5 5l.005-.217A5 5 0 0 1 12 2m2 12a5 5 0 0 1 5 5v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5z' />
		</svg>
	)
}

export const IconAdd = ({ fill = 'currentColor', className = '' }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='34'
			height='34'
			fill='none'
			stroke={fill}
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='2'
			className={className}
			viewBox='0 0 24 24'
		>
			<path fill='none' stroke='none' d='M0 0h24v24H0z' />
			<path d='M12 5v14m-7-7h14' />
		</svg>
	)
}
