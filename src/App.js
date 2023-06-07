import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import './css/App.css'
import LoginPage from './components/LoginPage'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}
