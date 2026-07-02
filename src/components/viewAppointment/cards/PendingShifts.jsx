import { useState } from "react";
import EditAppointment from "../../modal/EditAppointment";
import { formatDate, cancelBooking } from "../../../utils/Bookings";
import {
  IconCalendarFilled,
  IconTag,
  IconUser,
  IconSettings,
} from "@tabler/icons-react";

import { getService } from "../../../utils/services";

function PendingShifts({ setAppointments, appointment, event }) {
  const [isOpen, setIsOpen] = useState(false);

  const canEditBooking = (date) => {
    const now = new Date();
    const bookingDate = new Date(date);

    const oneHourInMs = 60 * 60 * 1000;

    return now.getTime() < bookingDate.getTime() + oneHourInMs;
  };

  return (
    <article
      key={appointment.id}
      className={`relative overflow-hidden rounded-2xl border border-white/[0.16] bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.4),0_0_20px_rgba(255,255,255,0.04)] p-4 flex flex-col gap-2`}
    >
      <div
        className={`absolute left-0 top-0 h-full w-[3px] ${appointment.status === "cancelled" ? "bg-gradient-to-b from-rose-400/60 via-rose-400/15 to-transparent" : "bg-gradient-to-b from-emerald-400/60 via-emerald-400/15 to-transparent"}`}
      />
      <section className="relative flex items-center justify-between mb-1">
        <div className="flex gap-2 items-center text-sm text-white/45 font-bold">
          <IconCalendarFilled className="text-[#e3b869]" />
          <span>{formatDate(appointment.start)}</span>
        </div>
        <span
          className={`flex items-center gap-1 font-bold text-sm border px-2 py-1 rounded-full ${appointment?.status === "accepted" ? "text-emerald-300/90 bg-emerald-400/[0.08] border-emerald-400/15" : "text-rose-300/90 bg-rose-400/[0.08] border-rose-400/15"}`}
        >
          <span
            className={`w-2 h-2 rounded-full ${appointment.status === "cancelled" ? "bg-rose-400/90" : "bg-emerald-400/90"}`}
          ></span>
          {appointment.status === "cancelled" ? "Cancelado" : "Aceptado"}
        </span>
      </section>

      <span className="relative text-2xl font-bold my-1 text-white/90">
        {event?.title ||
          appointment.eventType?.name ||
          "Servicio no disponible"}
      </span>

      <section className="relative w-full">
        <div className="bg-white/[0.08] rounded-full h-0.5 w-full"></div>

        <section className="flex justify-between">
          <div className="flex-col justify-between items-center ">
            <div className="flex items-center gap-2 mt-2">
              <div className="p-2 bg-[#e3b869]/[0.08] border border-[#e3b869]/20 rounded-md">
                <IconTag size={20} className="text-[#e3b869]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white/40">
                  Precio total
                </h4>
                <span className="font-bold text-white/85">
                  {getService(appointment.eventType?.id)?.price}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="p-2 bg-[#e3b869]/[0.08] border border-[#e3b869]/20 rounded-md">
                <IconUser size={20} className="text-[#e3b869]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white/40">Cliente</h4>
                <span className="font-bold text-white/85">
                  {appointment.attendees?.[0]?.name || "Sin nombre"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center gap-2 bg-white/[0.06] border border-white/[0.16] active:bg-white/[0.12] hover:bg-white/[0.12] hover:border-[#e3b869]/25 text-white/60 p-3 rounded-full font-bold text-sm transition-all transform active:scale-95 ${
                appointment.status === "cancelled" ||
                !canEditBooking(appointment.start)
                  ? "hidden"
                  : ""
              }`}
            >
              <IconSettings stroke={2} />
            </button>
          </div>
        </section>
      </section>

      <EditAppointment
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onCancel={(uid) => cancelBooking(uid, setAppointments)}
        cita={appointment}
      />
    </article>
  );
}

export default PendingShifts;
