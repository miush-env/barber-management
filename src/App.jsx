import './styles/index.css'

import { BrowserRouter, Routes, Route } from 'react-router'

import SignIn from './pages/SignIn'
import Login from './pages/Login'
import PanelBarber from './pages/admin/PanelBarber.jsx'
import CreateAppointment from './pages/admin/ViewAppointment.jsx'
import ViewAppointment from './pages/admin/ViewAppointment.jsx'
import TabletClient from './pages/admin/TabletClient.jsx'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' index element={<Login />} />
				<Route path='/sign-in' element={<SignIn />} />

				<Route path='/crear-cita' element={<CreateAppointment />} />
				<Route path='/inicio' element={<PanelBarber />} />
				<Route path='/ver-citas' element={<ViewAppointment />} />
				<Route path='/ver-clientes' element={<TabletClient/>} />
				<Route path='/perfil' element={<h1>Aquí veras tu perfil</h1>} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
