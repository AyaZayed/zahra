import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import logo from '../assets/logo/logo.png'
import zahra from '../assets/logo/zahra.png'
import welcome from '../assets/illustorations/landing-doctors.png'
import { Link } from 'react-router-dom'
import network from '../assets/icons/network.png'
import search from '../assets/icons/search.png'
import phone from '../assets/icons/phone.png'
import diagnostic from '../assets/icons/diagnostic.png'

export default function Home() {
    return (
        <>
            <Navbar />
            <main className='home-page'>
                <section className="welcome">
                    <div className="welcome-text">
                        <h2>مرحباً بك في <span><img src={logo} alt='zahra' /></span> للأطباء</h2>
                        <p>أول موقع عربى لمساعدتك كطبيب فى تشخيص مرض سرطان الثدى </p>
                        <Link to='login' exact='true'><button className='primary-button'>انضم الآن</button></Link>
                    </div>
                    <div className="welcome-image">
                        <img src={welcome} alt='image of three doctors in lab coats' />
                    </div>
                </section>
                <section className="services">
                    <div className='services-list'>
                        <div className='services-item'>
                            <img src={network} alt='a network of people' />
                            <h5>الوصول لعدد اكبر من المرضى</h5>
                        </div>
                        <div className='services-item'>
                            <img src={search} alt='a magnifying glass' />
                            <h5>متابعة مستجدات المرضى اليومية</h5>
                        </div>
                        <div className='services-item'>
                            <img src={phone} alt='a phone' />
                            <h5>سهولة التواصل مع المريض</h5>
                        </div>
                        <div className='services-item'>
                            <img src={diagnostic} alt='computer with a magnifying glass that has a heart rate on it' />
                            <h6>الوصول لتشخيص ادق بمساعدة الذكاء الاصطناعي</h6>
                        </div>
                    </div>
                    <div className='services-text'>
                        <h1>خدمات زهرة المميزة</h1>
                        <p>نوفر لك أداة لتحليل البيانات الخاصة بمرضاك والحصول على أفضل النتائج </p>
                        <Link to='/services' exact='true'><button className='primary-button'>اضغط لمعرفة المزيد</button></Link>
                    </div>
                </section>
                <section className="subscriptions">
                    <div className="subscriptions-text">
                        <img src={zahra} alt='zahra' />
                        <p>نوفر في زهرة خطط إشتراك لتناسب جميع المستخدمين بادر الآن واشترك في زهرة لتسهيل رحلتك كطبيب </p>
                    </div>
                    <div className="subs">
                        <h3>اختر الاشتراك المناسب لك</h3>
                        <div className="subs-list">
                            <div className="subs-item">
                                <h4>اشتراك أسبوعي </h4>
                                <p>استمتع بجميع خدمات زهرة لمدة أسبوع واحد</p>
                                <h5>EGP<span className='price'>50</span></h5>
                                <button className='secondary-button'>اشترك الآن</button>
                            </div>
                            <div className="subs-item">
                                <h4>اشتراك شهري </h4>
                                <p>اشترك واحصل على فترة تجريبية مجانية لمدة 30 يوم</p>
                                <h5>EGP<span className='price'>150</span></h5>
                                <button className='secondary-button'>اشترك الآن</button>
                            </div>
                            <div className="subs-item">
                                <h4>اشتراك 90 يوم </h4>
                                <p>اشترك بسعر أوفر لمدة 3 أشهر</p>
                                <h5>EGP<span className='price'>300</span></h5>
                                <button className='secondary-button'>اشترك الآن</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
