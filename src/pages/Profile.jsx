import NavBar from "../components/NavBar";
import PersonalInfo from "../components/profile/PersonalInfo.jsx";
import AccountSettings from "../components/profile/AccountSettings.jsx";
import Header from "../components/profile/Header.jsx";
import HeaderPage from "./HeaderPage.jsx";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { UserProfile } from "@clerk/react";
import { Edit3, Check } from "lucide-react";
import { useState, useRef } from "react";

function Profile() {
  const navigate = useNavigate();
  const [edit, setIsEdit] = useState(false);
  const personalInfoRef = useRef();

  const handleEditClick = async () => {
    if (edit) {
      await personalInfoRef.current.save();
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#141419]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.09),transparent_60%)]" />
      <div className="pointer-events-none fixed top-[-12%] left-1/2 -translate-x-1/2 h-[560px] w-[780px] rounded-full bg-blue-500/[0.1] blur-[170px] animate-[pulseSoft_9s_ease-in-out_infinite]" />
      <div className="pointer-events-none fixed bottom-0 -right-20 h-[400px] w-[400px] rounded-full bg-[#e3b869]/[0.06] blur-[150px]" />

      <div className="relative z-10">
        <HeaderPage path="/inicio" name="Perfil" />
      </div>

      <article className="relative z-10 pb-16">
        <section className="mb-4">
          <Header />
          <div className="px-4">
            <button
              className="w-full bg-white/[0.06] border border-[#e3b869]/25 rounded-full p-2 flex items-center justify-center gap-3 hover:bg-white/[0.1] active:bg-white/[0.1] transition-colors"
              onClick={handleEditClick}
            >
              {edit ? (
                <Check className="w-4 h-4 text-[#e3b869]" />
              ) : (
                <Edit3 className="w-4 h-4 text-[#e3b869]" />
              )}
              <span className="font-semibold text-[#e3b869]">
                {edit ? "Confirmar Cambios" : "Editar Perfil"}
              </span>
            </button>
          </div>
        </section>

        <section className="p-4">
          <h2 className="text-sm mb-2 font-bold text-white/40 tracking-wider">
            Datos Personales
          </h2>
          <PersonalInfo key={edit} ref={personalInfoRef} edit={edit} />
        </section>
        <section className="p-4">
          <AccountSettings />
        </section>
      </article>

      <section className="fixed bottom-0 w-full px-5 z-20">
        <NavBar />
      </section>
    </main>
  );
}

export default Profile;
