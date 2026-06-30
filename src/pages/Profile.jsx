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

  const handleEditClick = () => {
    if (edit) {
      personalInfoRef.current.save();
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  };

  return (
    <main>
      <HeaderPage path="/inicio" name="Perfil" />

      <article className="bg-gray-200/40 min-h-screen pb-16">
        <section className="mb-4">
          <Header />
          <div className="px-4">
            <button
              className="w-full bg-blue-600 rounded-full p-2 flex items-center justify-center gap-3 active:bg-blue-500"
              onClick={handleEditClick}
            >
              {edit ? (
                <Check className="w-4 h-4 text-white" />
              ) : (
                <Edit3 className="w-4 h-4 text-white" />
              )}
              <span className="font-semibold text-white">
                {edit ? "Confirmar Cambios" : "Editar Perfil"}
              </span>
            </button>
          </div>
        </section>

        <section className="p-4">
          <h2 className="text-sm mb-2 font-bold text-gray-500/80 tracking-wider">
            Datos Personales
          </h2>
          <PersonalInfo ref={personalInfoRef} edit={edit} />
        </section>
        <section className="p-4">
          <AccountSettings />
        </section>
      </article>

      <section className="fixed bottom-0 w-full px-5">
        <NavBar />
      </section>
    </main>
  );
}

export default Profile;
