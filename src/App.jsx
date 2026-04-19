import './styles/index.css'

import { BrowserRouter, Routes, Route } from 'react-router'
import { ProtectedRoute } from './ProtectedRoute.jsx'
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

				<Route path='/crear-cita' element={
					<ProtectedRoute>
						<CreateAppointment />
					</ProtectedRoute>
				} />
				<Route path='/inicio' element={
					<ProtectedRoute>
						<PanelBarber />
					</ProtectedRoute>
				} />
				<Route path='/ver-citas' element={
					<ProtectedRoute>
						<ViewAppointment />
					</ProtectedRoute>
				} />
			
				<Route path='/ver-clientes' element={
					<ProtectedRoute>
						<TabletClient/>
					</ProtectedRoute>
				} />
				<Route path='/perfil' element={
					<ProtectedRoute>
						<Profile />
					</ProtectedRoute>
				} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
