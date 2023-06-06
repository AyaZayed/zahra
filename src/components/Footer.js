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
                <h6>من نحن</h6>
                <h6>آراء المستخدمين</h6>
            </div>
            <div className="container">
                <h6>سياسة الخصوصية</h6>
                <h6>شروط الاستخدام</h6>
            </div>
            <div className="container">
                <h6>تواصل معنا</h6>
                <h6>للإعلان</h6>
            </div>
            <div className="container socials">
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
