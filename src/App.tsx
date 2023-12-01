import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard } from './component/Dashboard'
import { Generate } from './component/Generate'
import { AboutUs } from './component/AboutUs'

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/generate" element={<Generate />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  </Router>
)
