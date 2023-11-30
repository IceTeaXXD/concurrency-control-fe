import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './component/Home/Home'
import { Dashboard } from './component/Home/Dashboard'

export const App = () => (
  <Router>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
)
