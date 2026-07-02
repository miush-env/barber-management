import RescheduleIframe from './RescheduleIframe'
import { X } from 'lucide-react'

function EditAppointment({ isOpen, setIsOpen, onCancel, cita }) {
	const handleCancel = async () => {
		if (cita?.status === 'cancelled') {
			console.warn('La cita ya está cancelada, no se puede volver a cancelar.', cita.uid)
			return
		}

		try {
			await onCancel(cita.uid)
			setIsOpen(false)
		} catch (error) {
			console.error('Error al cancelar la cita:', error)
		}
	}

	return (
		<article
			className={`bg-black/60 backdrop-blur-sm min-h-screen min-w-screen z-100 fixed left-0 top-0 ${isOpen === true ? 'flex' : 'hidden'} items-center justify-center`}
		>
			<section className='rounded-2xl border border-white/[0.16] bg-[#191a1e] shadow-[0_20px_60px_rgba(0,0,0,0.6)] w-80 flex flex-col overflow-hidden'>
				<div className='flex justify-between items-center bg-white/[0.04] border-b border-white/[0.08] p-4'>
					<h2 className='font-bold text-lg text-white/90'>Editar cita</h2>
					<button onClick={() => setIsOpen(false)} className='hover:bg-white/[0.1] active:bg-white/[0.1] rounded-full p-[3px] transition-colors'>
						<X className='stroke-white/60'/>
					</button>
				</div>

				<div className='flex flex-col gap-2 justify-center items-center h-full'>
					<RescheduleIframe
						calUsername='multipurpose-ki7ln0'
						eventSlug={cita?.eventType?.slug}
						rescheduleUid={cita?.uid}
					/>
					<div className='p-4 w-full'>
						<button
							onClick={handleCancel}
							className='
														w-full py-2 rounded-md bg-linear-to-b from-red-500 to-red-600 flex justify-center gap-4 items-center 
														transition-all duration-150 active:shadow-lg active:shadow-red-500/60'
						>
							<span className='text-white font-semibold'>Eliminar cita</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='#ffffff'
								className='icon icon-tabler icons-tabler-filled icon-tabler-trash'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none' />
								<path d='M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007zm-10 4a1 1 0 0 0 -1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0 -1 -1m4 0a1 1 0 0 0 -1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0 -1 -1' />
								<path d='M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005z' />
							</svg>
						</button>
					</div>
				</div>
			</section>
		</article>
	)
}

export default EditAppointment
