import { BarChart3, CheckCircle2, XCircle } from "lucide-react";

function CardClientsStatus({title, value = 0, style = 'none'}) {
	 const colors_icon = [
    { icon: <BarChart3 className="w-5 h-5 text-blue-600" />, color: 'bg-blue-50 text-blue-600 border-blue-100' },
    { icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />, color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
    { icon: <XCircle className="w-5 h-5 text-rose-600" />, color: 'bg-rose-50 text-rose-600 border-rose-100' },
  ];

	let styleComponent = null

	if (style == "totals") {
		styleComponent = colors_icon[0]
	} else if (style == "served") {
		styleComponent = colors_icon[1]
	} else {
		styleComponent = colors_icon[2]
	}

  return (
		<div 
			className={`flex flex-col items-center justify-center p-4 rounded-2xl border ${styleComponent.color} shadow-sm transition-transform active:scale-95`}
		>
			<div className="mb-2 opacity-80">{styleComponent.icon}</div>
			<span className="text-2xl font-black">{value}</span>
			<span className="text-xs font-medium uppercase tracking-wider opacity-70">{title}</span>
		</div>
	)
}

export default CardClientsStatus