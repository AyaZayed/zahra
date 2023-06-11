import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import './css/App.css'
import LoginPage from './components/LoginPage'
import Subscribe from './components/Subscribe'
import Payment from './components/Payment'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}
