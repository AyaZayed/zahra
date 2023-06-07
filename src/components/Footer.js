import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo/zahra.png'
import email from '../assets/icons/email.png'
import facebook from '../assets/icons/facebook-footer.png'
import instagram from '../assets/icons/instagram.png'
import twitter from '../assets/icons/twitter.png'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container logo">
                <Link to='/' exact='true' className='logo'>
                    <img src={logo} alt="zahra name and logo" />
                </Link>
            </div>
            <div className="container">
                <small>من نحن</small>
                <small>آراء المستخدمين</small>
            </div>
            <div className="container">
                <small>سياسة الخصوصية</small>
                <small>شروط الاستخدام</small>
            </div>
            <div className="container">
                <small>تواصل معنا</small>
                <small>للإعلان</small>
            </div>
            <div className="socials">
                <Link to='#' exact='true' className='mail'>
                    <img src={email} alt="link to zahra email" />
                </Link>
                <Link to='#' exact='true' className='facebook'>
                    <img src={facebook} alt="link to zahra facebook" />
                </Link>
                <Link to='#' exact='true' className='instagram'>
                    <img src={instagram} alt="link to zahra instagram" />
                </Link>
                <Link to='#' exact='true' className='twitter'>
                    <img src={twitter} alt="link to zahra twitter" />
                </Link>
            </div>
        </footer>
    )
}
