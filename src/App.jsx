import './styles/index.css'

import { BrowserRouter, Routes, Route } from 'react-router'

import SignIn from './pages/SignIn'
import Login from './pages/Login'
import PanelBarber from './pages/admin/PanelBarber.jsx'
import CreateAppointment from './pages/CreateAppointment.jsx'
import ViewAppointment from './pages/ViewAppointment.jsx'
import TabletClient from './pages/admin/TabletClient.jsx'
import Profile from './pages/Profile.jsx'

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
				<Route path='/perfil' element={<Profile />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
