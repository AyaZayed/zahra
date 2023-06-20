import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo/zahra.png'

export default function Navbar({ landing }) {

    return (
        <>
            <a href="#navbar" id="menu-toggle" className="menu-toggle" aria-label="Open  menu">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
            </a>
            <nav className={`${landing ? '' : 'dashboard-nav'} navbar`} id="navbar" aria-label="navbar menu">
                <a href="#menu-toggle" id="menu-close" className="menu-close" aria-label="Close  menu">
                    x
                </a>
                <Link to='/' exact='true' className='logo'>
                    <img src={logo} alt="zahra name and logo" />
                </Link>
                <ul>
                    <li><Link to={`${landing ? "/" : "/dashboard"}`} exact='true'>الصفحة الرئيسية</Link></li>
                    <li><Link to='/contact'>تواصل معنا </Link></li>
                    {landing ?
                        (<>
                            <li><Link state={false} to='/login'>تسجيل الدخول</Link></li>
                            <li><Link state={true} to='/login'><button>انضم الآن</button></Link></li>
                        </>)
                        :
                        <li><Link to='/login'>تسجيل الخروج</Link></li>
                    }

                </ul>
                <a href="#main-menu-toggle" className="backdrop" tabIndex="-1" hidden></a>
            </nav>
        </>
    )
}
