import React from 'react'
import { useState } from 'react'
import loginImage from '../assets/illustorations/login-page.png'
import Login from './Login'
import Signup from './Signup'
import { useLocation } from 'react-router-dom'

export default function LoginPage() {
    const location = useLocation();
    const isNew = location.state;
    const [newUser, setNewUser] = useState(isNew)
    return (
        <div className='login-page'>
            <div className='login-image'>
                <img src={loginImage} alt="login" />
            </div>
            <div className='login-text'>
                <div className='login-tabs'>
                    <button className={newUser ? 'login-btn active' : 'login-btn'} onClick={() => setNewUser(true)}>
                        حساب جديد</button>
                    <button className={newUser ? 'login-btn' : 'login-btn active'} onClick={() => setNewUser(false)}>تسجيل الدخول</button>
                </div>
                {
                    newUser ? <Signup /> : <Login />
                }
            </div>
        </div>
    )
}
