import { Clock, Star, ChevronRight } from 'lucide-react';

function ServiceCard({ title, description, length }) {

  const getPriceFromDescription = (description) => {
    const match = description.match(/\$(\d+)/);
    return match ? Number(match[1]) : null;
  };

  return (
     <article className="group relative flex h-32 w-full overflow-hidden rounded-2xl bg-zinc-900 transition-all active:scale-[0.98]">
      <figure className="absolute inset-0 w-full m-0">
        <img 
          src='https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=800&auto=format&fit=crop' 
          alt={`Imagen del servicio ${title}`}
          className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop'; }}
        />

        <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-zinc-950/80 to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950/50 to-transparent" aria-hidden="true" />
      </figure>

      <div className="relative flex w-full items-center justify-between px-5">
        <header className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-white leading-tight">{title}</h3>
            {title.includes("Degrade") && (
              <Star size={12} className="fill-cyan-500 text-cyan-500" aria-label="Servicio destacado" />
            )}
          </div>
          <div className="flex items-center gap-3 text-[11px] font-medium text-zinc-400">
            <span className="flex items-center gap-1">
              <Clock size={12} className="text-cyan-500" />
              <time dateTime={`PT${length}M`}>{length} min</time>
            </span>
            <span className="h-1 w-1 rounded-full bg-zinc-700" aria-hidden="true" />
            <span className="text-cyan-400">Peluquería</span>
          </div>
        </header>

        <section className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Precio</p>
            <data className="text-xl font-black text-white" value={getPriceFromDescription(description)}>
              ${getPriceFromDescription(description)}
            </data>
          </div>
          <div 
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md"
            aria-label={`Reservar ${title}`}
          >
            <ChevronRight size={18} />
          </div>
        </section>
      </div>
    </article>
  )
}

export default ServiceCard