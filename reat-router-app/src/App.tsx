import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Register from './pages/register'
import Profile from './pages/profile'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<About/>} />
        <Route path="/cadastro" element={<Register/>} />
        <Route path="/perfil/:username" element={<Profile/>} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
