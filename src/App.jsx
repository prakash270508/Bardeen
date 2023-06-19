import Login from "./components/Login"
import Signup from "./components/Signup"
import {BrowserRouter as Router , Route ,Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
      </Router>
    </>
  )
}

export default App
