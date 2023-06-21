import React from 'react'
import google from '../assets/icons/google.png'
import facebook from '../assets/icons/facebook.png'
import user from '../assets/icons/user.png'
import lock from '../assets/icons/lock.png'
import eye from '../assets/icons/eye.png'
import checkmark from '../assets/icons/checkmark.png'

export default function Login() {
    return (
        <div className='form login-form'>
            <h4>أهلاََ بعودتك</h4>
            <form>
                <div className='first-group'>
                    <label className='primary-label'>
                        <img src={user} alt='user' className='icon' />
                        <input className='primary-input' type="text" placeholder='أدخل اسمك الكامل' />
                    </label>
                    <label className='primary-label'>
                        <img src={lock} alt='lock' className='icon' />
                        <input classname='primary-input' type="password" placeholder='كلمة السر ' />
                        <img src={eye} alt='an eye when pressed makes the password unhidden' id='eye' />
                    </label>
                </div>
                <div className='second-group'>
                    <div className='checkbox'>
                        <img src={checkmark} alt='checkmark' />
                        <label>تذكرني</label>
                    </div>
                    <a href='#'>هل نسيت كلمة السر؟</a>
                </div>
                <Link to='/dashboard' exact={true}>
                    <button type='submit' className='primary-button'>تسجيل الدخول</button>
                </Link>
                <small style={{ 'display': 'block' }}>أو سجل باستخدام</small>
                <div className='socials'>
                    <a href='#'> حسابك فى جوجل<img src={google} alt='login using google' /></a>
                    <a href='#'> حسابك فى فيسبوك<img src={facebook} alt='login using facebook' /></a>
                </div>
            </form>
        </div>
    )
}
