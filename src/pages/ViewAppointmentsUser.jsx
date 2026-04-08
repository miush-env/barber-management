import React, { useEffect, useState } from 'react'
import { getAppointments } from '../utils/Bookings';
import { useUser } from '@clerk/react';

function ViewAppointmentsUser() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser()

  // ID de ejemplo para visualización
  const CLERK_ID = user.id;
  // console.log(user)

  useEffect(() => {
  const fetchData = async () => {
    setLoading(true);

    const data = await getAppointments(CLERK_ID);
    setAppointments(data);

    setLoading(false);
  };

  fetchData();
}, []);

  return (
    <main className="min-h-screen bg-gray-50 flex justify-center py-10 px-6">
      <div className="w-full max-w-md">
        <header className="mb-8">
          <h1 className="text-5xl font-black text-gray-900 uppercase italic tracking-tighter leading-[0.85]">
            Mis<br/><span className="text-blue-600">Turnos</span>
          </h1>
          <p className="mt-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
            <span className="w-8 h-[2px] bg-blue-600"></span>
            Usuario: {CLERK_ID}
          </p>
        </header>
       
     {loading ? (
  <p>Cargando...</p>
) : appointments.length === 0 ? (
  <p>No hay citas</p>
) : (
  <div>
    {appointments.map((cita) => (
      <div key={cita._id || cita.id} style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "10px" }}>
        
        <p><strong>ID:</strong> {cita._id || cita.id}</p>
        <p><strong>Fecha:</strong> {cita.start}</p>
        <p><strong>Estado:</strong> {cita.status}</p>

        {/* por si hay más data */}
        <pre>{JSON.stringify(cita, null, 2)}</pre>

      </div>
    ))}
  </div>
)}
        
      </div>
    </main>
  );
}

export default ViewAppointmentsUser;