import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import logo from '../assets/logo/logo.png'
import welcome from '../assets/illustorations/landing-doctors.png'
import { NavLink } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <Navbar />
            <main className='home-page'>
                <section className="welcome">
                    <div className="welcome-text">
                        <h1>مرحباً بك في <span><img src={logo} alt='zahra' /></span> للأطباء</h1>
                        <p>أول موقع عربى لمساعدتك كطبيب فى تشخيص مرض سرطان الثدى </p>
                        <NavLink to='login' exact='true'><button>انضم الآن</button></NavLink>
                    </div>
                    <div className="welcome-image">
                        <img src={welcome} alt='image of three doctors in lab coats' />
                    </div>
                </section>
                <section className="services"></section>
                <section className="subscriptions"></section>
            </main>
            <Footer />
        </>
    )
}
