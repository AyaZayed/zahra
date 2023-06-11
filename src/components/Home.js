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
import apple from '../assets/icons/apple.png'
import google from '../assets/icons/google-play.png'
import appGallery from '../assets/icons/app-gallery.png'
import phones from '../assets/illustorations/phones.png'

export default function Home() {
    const price = ['50', '150', '300']

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
                    <div className='services-text'>
                        <h1>خدمات زهرة المميزة</h1>
                        <p>نوفر لك أداة لتحليل البيانات الخاصة بمرضاك والحصول على أفضل النتائج </p>
                        <Link to='/services' exact='true'><button className='primary-button'>اضغط لمعرفة المزيد</button></Link>
                    </div>
                    <div className='services-list'>
                        <div className='services-item'>
                            <img src={network} alt='a network of people' />
                            <h6>الوصول لعدد اكبر من المرضى</h6>
                        </div>
                        <div className='services-item'>
                            <img src={search} alt='a magnifying glass' />
                            <h6>متابعة مستجدات المرضى اليومية</h6>
                        </div>
                        <div className='services-item'>
                            <img src={phone} alt='a phone' />
                            <h6>سهولة التواصل مع المريض</h6>
                        </div>
                        <div className='services-item'>
                            <img src={diagnostic} alt='computer with a magnifying glass that has a heart rate on it' />
                            <h6>الوصول لتشخيص ادق بمساعدة الذكاء الاصطناعي</h6>
                        </div>
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
                                <h5>اشتراك أسبوعي </h5>
                                <p>استمتع بجميع خدمات زهرة لمدة أسبوع واحد</p>
                                <h6>EGP<span className='price'>{price[0]}</span></h6>
                                <Link to='/payment' state={price[0]} exact='true'><button className='secondary-button'>اشترك الآن</button></Link>
                            </div>
                            <div className="subs-item">
                                <h5>اشتراك شهري </h5>
                                <p>اشترك واحصل على فترة تجريبية مجانية لمدة 30 يوم</p>
                                <h6>EGP<span className='price'>{price[1]}</span></h6>
                                <Link to='/payment' state={price[1]} exact='true'><button className='secondary-button'>اشترك الآن</button></Link>
                            </div>
                            <div className="subs-item">
                                <h5>اشتراك 90 يوم </h5>
                                <p>اشترك بسعر أوفر لمدة 3 أشهر</p>
                                <h6>EGP<span className='price'>{price[2]}</span></h6>
                                <Link to='/payment' state={price[2]} exact='true'><button className='secondary-button'>اشترك الآن</button></Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='app'>
                    <div className='app-text'>
                        <h3>خدماتنا ليست مقتصرة على الأطباء فقط</h3>
                        <p>تطبيق زهرة يرافقك خطوة بخطوة في رحلة علاجك يساعدك على :
                            تنظيم وتذكر مواعيد أدويتك , البحث عن الطبيب المناسب لك وسهولة التواصل معه  ,  متابعة  اي تغيرات تطرأ على جسدك وسهولة مشاركتها مع طبيبك الخاص , كل هذا وأكثر في مكان واحد</p>
                        <h3>حمل تطبيق زهرة الآن مجاناً</h3>
                        <div className='app-buttons'>
                            <Link to='#' exact='true'>App Store<img src={apple} alt='apple logo' /></Link>
                            <Link to='#' exact='true'>Google Play<img src={google} alt='google play logo' /></Link>
                            <Link to='#' exact='true'>App Gallery<img src={appGallery} alt='app gallery logo' /></Link>
                        </div>
                    </div>
                    <div className='app-image'>
                        <img src={phones} alt='image of three phones with the app open' />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
