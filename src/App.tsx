import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./component/Home/Home"

export const App = () => (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
)
