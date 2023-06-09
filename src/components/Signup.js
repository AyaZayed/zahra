import React from 'react'
import user from '../assets/icons/user.png'
import camera from '../assets/icons/camera.png'
import lock from '../assets/icons/lock.png'
import eye from '../assets/icons/eye.png'
import phoneIcon from '../assets/icons/phone-icon.png'
import stethoscope from '../assets/icons/stethoscope.png'
import google from '../assets/icons/google.png'
import facebook from '../assets/icons/facebook.png'
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <div className='form signup-form'>
            <h4>مرحباََ بك</h4>
            <form>
                <div className='first-group'>
                    <label className='primary-label'>
                        <img src={user} alt='user' className='icon' />
                        <input classname='primary-input' type="text" placeholder='أدخل اسمك الكامل'></input>
                    </label>
                    <div className='img-container'>
                        <img src={camera} alt='camera when pressed uploads a profile photo' id='camera' />
                    </div>
                </div>
                <label className='primary-label'>
                    <img src={lock} alt='lock' className='icon' />
                    <input classname='primary-input' type="password" placeholder='كلمة السر ' />
                    <img src={eye} alt='an eye when pressed makes the password unhidden' id='eye' />
                </label>
                <label className='primary-label'>
                    <img src={lock} alt='lock' className='icon' />
                    <input classname='primary-input' type="password" placeholder='تأكيد كلمة السر ' />
                    <img src={eye} alt='an eye when pressed makes the password unhidden' id='eye' />
                </label>
                <div className='second-group'>
                    <label className='primary-label'>
                        <img src={phoneIcon} alt='phone' className='icon' />
                        <input classname='primary-input' type="tel" placeholder='رقم الهاتف'></input>
                    </label>
                    <select className='country'>
                        <option>البلد</option>
                        <option>مصر</option>
                        <option>المملكة العربية السعودية</option>
                        <option>الإمارات</option>
                    </select>
                </div>
                <div className='select-wrapper'>
                    <img src={stethoscope} alt='stethoscope' />
                    <select className='specialization primary-select'>
                        <option>التخصص</option>
                        <option>طبيب عام</option>
                        <option>طبيب باطنة</option>
                        <option>طبيب أورام</option>
                    </select>
                </div>
                <div className='gender-group'>
                    <h6>النوع :</h6>
                    <label htmlFor='female'><input id='female' value='female' type='radio' name='gender' /> أنثى</label>
                    <label htmlFor='male'><input id='male' value='male' type='radio' name='gender' /> ذكر</label>
                </div>
                <Link to='/subscribe'>
                    <button type='submit' className='primary-button'>الصفحة التالية</button>
                </Link>
                <small>أو سجل باستخدام</small>
                <div className='socials'>
                    <a href='#'><img src={facebook} alt='login using facebook' /></a>
                    <a href='#'><img src={google} alt='login using google' /></a>
                </div>
            </form>
        </div>
    )
}
