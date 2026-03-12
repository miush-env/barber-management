import './styles/index.css'

import { BrowserRouter, Routes, Route } from 'react-router'

import SignIn from './pages/SignIn'
import Login from './pages/Login'
import PanelBarber from './pages/PanelBarber'
import CreateAppointment from './pages/CreateAppointment.jsx'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' index element={<Login />} />
				<Route path='/sign-in' element={<SignIn />} />

				<Route path='/Crear-cita' element={<CreateAppointment />} />
				<Route path='/home' element={<PanelBarber />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
