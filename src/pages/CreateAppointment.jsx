import NavBar from "../components/NavBar";
import ServiceCard from "@components/CreateAppointment/ServiceCard";
import ButtonCallCal from "../components/CreateAppointment/Cal.com/ButtonCallCal";
import {
  serviceCorte,
  serviceCorteBarba,
  serviceSoloPuntas,
  serviceGlobal,
  serviceBarba,
} from "../utils/ServiceCal";
import { getNameEvent } from "../utils/Bookings";
import { useEffect, useMemo, useState } from "react";
import HeaderPage from "./HeaderPage";

import { IconScissors, IconMoustache, IconDroplet } from "@tabler/icons-react";

function CreateAppointment() {
  const [nameEvent, setNameEvent] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [activeTag, setActiveTag] = useState("");

  const functionMapper = {
    "corte-clasico": serviceCorte,
    "corte-clasico-barba": serviceCorteBarba,
    "tinte-solo-puntas": serviceSoloPuntas,
    global: serviceGlobal,
    barba: serviceBarba,
  };

  useEffect(() => {
    const fetchNameEvent = async () => {
      try {
        const res = await getNameEvent();
        if (res) {
          setNameEvent(res);
        }
      } catch (error) {
        console.error("Error en la petición:", error);
      }
    };
    fetchNameEvent();
  }, []);

  const buttonFilters = [
    {
      label: "cortes",
      value: "corte",
      icon: <IconScissors size={16} className="text-[#e3b869]" />,
    },
    {
      label: "color",
      value: "color",
      icon: <IconDroplet size={16} className="text-[#e3b869]" />,
    },
    {
      label: "barba",
      value: "barba",
      icon: <IconMoustache size={16} className="text-[#e3b869]" />,
    },
  ];

  // Mapeo de filtros a slugs de servicios
  const filterMapping = {
    color: ["tinte-solo-puntas", "global"],
    barba: ["barba"],
    corte: ["corte-clasico", "corte-clasico-barba"],
  };

  const filteredEvents = useMemo(() => {
    const normalizedFilter = filterText.trim().toLowerCase();

    // Si se seleccionó un botón de filtro (activeTag está activo)
    if (activeTag && filterMapping[filterText]) {
      const allowedSlugs = filterMapping[filterText];
      return nameEvent.filter((event) => allowedSlugs.includes(event.slug));
    }

    // Si no hay filtro, mostrar todos
    if (!normalizedFilter) {
      return nameEvent;
    }

    // Búsqueda por texto
    return nameEvent.filter((event) => {
      const text = [event.title, event.description, event.slug]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return text.includes(normalizedFilter);
    });
  }, [filterText, nameEvent, activeTag]);

  const handleTagClick = (filterValue, label) => {
    setFilterText(filterValue);
    setActiveTag(label);
  };

  const handleInputChange = (event) => {
    setFilterText(event.target.value);
    setActiveTag("");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#141419] pb-16">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.09),transparent_60%)]" />
      <div className="pointer-events-none fixed top-[-12%] left-1/2 -translate-x-1/2 h-[560px] w-[780px] rounded-full bg-blue-500/[0.1] blur-[170px] animate-[pulseSoft_9s_ease-in-out_infinite]" />
      <div className="pointer-events-none fixed bottom-0 -right-20 h-[400px] w-[400px] rounded-full bg-[#e3b869]/[0.06] blur-[150px]" />

      <div className="relative z-10">
        <HeaderPage
          path="/inicio"
          name="Agendar Cita"
          titleClassName="text-[#e3b869] drop-shadow-[0_0_10px_rgba(227,184,105,0.3)]"
        />
      </div>

      <div className="relative z-10">
        <section className="mb-6" aria-labelledby="services-title">
          <div className="flex flex-col gap-4 p-4">
            <div className="flex flex-col gap-3">
              <input
                id="service-filter"
                type="text"
                value={filterText}
                onChange={handleInputChange}
                placeholder="Escribe para filtrar servicios..."
                className="rounded-2xl border border-white/[0.14] bg-white/[0.05] backdrop-blur-xl px-4 py-3 text-sm text-white/85 placeholder-white/30 shadow-[0_10px_30px_rgba(0,0,0,0.35)] focus:border-[#e3b869]/40 focus:outline-none transition-all"
              />

              <div className="flex flex-wrap gap-3">
                {buttonFilters.map((button) => (
                  <button
                    key={button.label}
                    type="button"
                    className={`rounded-full flex gap-2 items-center border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      activeTag === button.label
                        ? "border-[#e3b869]/40 bg-[#e3b869]/15 text-[#e3b869] shadow-sm"
                        : "border-white/[0.14] bg-white/[0.04] text-white/50 hover:border-[#e3b869]/30 hover:text-[#e3b869]"
                    }`}
                    onClick={() => handleTagClick(button.value, button.label)}
                  >
                    {button.icon}
                    <span>{button.label}</span>
                  </button>
                ))}
              </div>
            </div>
            {filteredEvents.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-white/[0.14] bg-white/[0.02] p-6 text-center text-sm text-white/40">
                No se encontraron servicios que coincidan con la búsqueda.
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {filteredEvents.map((s, index) => {
                  const calFunction = functionMapper[s.slug] || serviceCorte;
                  // console.log(s)
                  return (
                    <ButtonCallCal key={index} service={calFunction}>
                      <ServiceCard {...s} />
                    </ButtonCallCal>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </div>

      <section className="fixed bottom-0 w-full px-5">
        <NavBar />
      </section>
    </main>
  );
}

export default CreateAppointment;
