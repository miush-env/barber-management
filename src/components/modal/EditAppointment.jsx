function EditAppointment({ isOpen, setIsOpen, services, time }) {
	const now = new Date().toISOString().slice(0, 16)

	console.log(services, time)

	return (
		<article
			className={`bg-gray-800/70 backdrop-blur-xs min-h-screen min-w-screen z-100 fixed left-0 top-0 ${isOpen === true ? 'flex' : 'hidden'} items-center justify-center`}
		>
			<section className='rounded-xl bg-linear-to-b from-white to-gray-300 w-80  flex flex-col'>
				<div className='flex justify-between items-center border-b border-gray-600 p-4'>
					<h2 className='font-bold'>Que Acción Quiere Realizar ?</h2>
					<button onClick={() => setIsOpen(!isOpen)}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='#aaa'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
							className='active:stroke-[#555] transition-colors duration-200'
						>
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />
							<path d='M18 6l-12 12' />
							<path d='M6 6l12 12' />
						</svg>
					</button>
				</div>
				<form className='p-4 flex flex-col gap-3'>
					<label className='flex flex-col'>
						<span>Servicio</span>

						<select className='focus:outline-green-600 border border-gray-300 rounded-md'>
							<option value='servicio-1'>Corte clásico</option>
							<option value='servicio-2'>Corte clásico + barba</option>
							<option value='servicio-3'>Global</option>
							<option value='servicio-4'>Degradado</option>
						</select>
					</label>

					<label className='flex flex-col mt-4'>
						<span>Fecha y hora</span>
						<input
							type='datetime-local'
							min={now}
							className='focus:outline-green-600 border border-gray-300 rounded-md p-1'
						/>
					</label>
				</form>
				<div className='flex justify-between items-center p-4 h-fulla outline-red-500'>
					<button
						className='w-32 py-2 rounded-md bg-linear-to-b from-blue-500 to-blue-600 flex justify-evenly items-center 
              transition-all duration-150 active:shadow-lg active:shadow-blue-500/60'
					>
						<span className='text-white font-semibold'>Confirmar</span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='#ffffff'
							class='icon icon-tabler icons-tabler-filled icon-tabler-pencil'
						>
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />
							<path d='M12.085 6.5l5.415 5.415l-8.793 8.792a1 1 0 0 1 -.707 .293h-4a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 .293 -.707zm5.406 -2.698a3.828 3.828 0 0 1 1.716 6.405l-.292 .293l-5.415 -5.415l.293 -.292a3.83 3.83 0 0 1 3.698 -.991' />
						</svg>
					</button>
					<button
						className='
                w-32 py-2 rounded-md bg-linear-to-b from-red-500 to-red-600 flex justify-evenly items-center 
                transition-all duration-150 active:shadow-lg active:shadow-red-500/60'
					>
						<span className='text-white font-semibold'>Eliminar</span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='#ffffff'
							class='icon icon-tabler icons-tabler-filled icon-tabler-trash'
						>
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />
							<path d='M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007zm-10 4a1 1 0 0 0 -1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0 -1 -1m4 0a1 1 0 0 0 -1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0 -1 -1' />
							<path d='M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005z' />
						</svg>
					</button>
				</div>
			</section>
		</article>
	)
}

export default EditAppointment
