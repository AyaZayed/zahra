import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Home() {
    return (
        <div>
            <Navbar />
            <section className="welcome">
                <div className="welcome_text">
                    <h1>مرحباً بك في <img src='../assets/logo/logo.png' alt='zahra' /> للأطباء</h1>
                </div>
                <div className="welcome_image"></div>
            </section>
            <section className="services"></section>
            <section className="subscriptions"></section>
            <Footer />
        </div>
    )
}
