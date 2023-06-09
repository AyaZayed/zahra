import React from 'react'
import loginImage from '../assets/illustorations/login-page.png'
import hospital from '../assets/icons/hospital.png'
import address from '../assets/icons/address.png'
import hash from '../assets/icons/hash.png'
import { Link } from 'react-router-dom'

export default function Subscribe() {
    const price = ['50', '150', '300']

    return (
        <div className='login-page form' >
            <div className='login-image'>
                <img src={loginImage} alt="login" />
            </div>
            <div className='login-text'>
                <h4>معلومات التخصص</h4>
                <form className='subscribe-form'>
                    <label className='primary-label select-wrapper'>
                        <img src={hospital} alt='hospital' id='stethoscope' />
                        <select className='hospital primary-select'>
                            <option>ادخل نوع المكان</option>
                            <option>مستشفى</option>
                            <option>عيادة</option>
                            <option>مركز طبي</option>
                        </select>
                    </label>
                    <label className='primary-label'>
                        <img src={address} alt='address' className='icon' />
                        <input classname='primary-input' type="text" placeholder='أدخل العنوان'></input>
                    </label>
                    <label className='primary-label'>
                        <img src={hash} alt='hash sign' className='icon' />
                        <input classname='primary-input' type="text" placeholder='رقم السجل الضريبي'></input>
                    </label>
                    <label className='primary-label'>
                        <img src={hash} alt='hash sign' className='icon' />
                        <input classname='primary-input' type="text" placeholder='رقم السجل التجاري'></input>
                    </label>
                    <h6>اختر الاشتراك المناسب لك</h6>

                    <div className="subs">
                        <div className="subs-list">
                            <div className="subs-item">
                                <small>اشتراك أسبوعي </small>
                                <p>استمتع بجميع خدمات زهرة لمدة أسبوع واحد</p>
                                <h6>EGP<span className='price'>{price[0]}</span></h6>
                                <Link to='/payment' state={price[0]} exact='true'><button className='secondary-button'>اشترك الآن</button></Link>
                            </div>
                            <div className="subs-item">
                                <small>اشتراك شهري </small>
                                <p>اشترك واحصل على فترة تجريبية مجانية لمدة 30 يوم</p>
                                <h6>EGP<span className='price'>{price[1]}</span></h6>
                                <Link to='/payment' state={price[1]} exact='true'><button className='secondary-button'>اشترك الآن</button></Link>
                            </div>
                            <div className="subs-item">
                                <small>اشتراك 90 يوم </small>
                                <p>اشترك بسعر أوفر لمدة 3 أشهر</p>
                                <h6>EGP<span className='price'>{price[2]}</span></h6>
                                <Link to='/payment' state={price[2]} exact='true'><button className='secondary-button'>اشترك الآن</button></Link>
                            </div>
                        </div>
                    </div>
                    <button className='primary-button' type='submit'>اشتراك</button>
                </form>
            </div>
        </div >
    )
}
