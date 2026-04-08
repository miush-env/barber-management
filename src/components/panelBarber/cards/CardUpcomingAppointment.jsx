import { ChevronRight } from "lucide-react";

function CardUpcomingAppointment({appointment}) {
	const isAccepted = appointment.status === true;

  return (
    <div 
      className="group flex items-center justify-between p-3 rounded-2xl transition-all active:scale-[0.98] cursor-pointer
                 bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 shadow-sm hover:border-blue-500/30 active:border-blue-500/30"
    >
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center min-w-[50px] py-1 border-r border-slate-100 dark:border-white/10">
          <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{appointment.time}</span>
          <span className="text-[10px] text-slate-400 uppercase font-medium">AM</span>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
            {appointment.clientName}
          </h4>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              {appointment.service}
            </span>
            <span className="text-[10px] opacity-20 dark:text-slate-600">•</span>
            <span className={`text-[10px] font-bold uppercase tracking-wider ${
              isAccepted ? 'text-emerald-500 dark:text-emerald-400' : 'text-rose-500 dark:text-rose-400'
            }`}>
              {isAccepted ? 'Aceptado' : 'Cancelado'}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 dark:bg-white/5 group-hover:bg-blue-500/10 group-active:bg-blue-500/10 transition-colors">
        <ChevronRight size={14} className="text-slate-700 dark:text-slate-600 group-active:text-blue-700 group-hover:text-blue-500" />
      </div>
    </div>
	)
}

export default CardUpcomingAppointment