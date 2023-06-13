import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import loginImage from '../assets/illustorations/login-page.png'
import creditCard from '../assets/icons/credit-card.png'
import fawry from '../assets/icons/fawry.png'
import { Link } from 'react-router-dom'
import Fawry from './Fawry'
import Visa from './Visa'

export default function Payment() {
    const location = useLocation();
    const price = location.state;

    const [method, setMethod] = useState('')

    function handlePaymentMethod(e) {
        setMethod(e.target.value)
    }

    return (
        <div className='login-page form payment'>
            <div className='login-image'>
                <img src={loginImage} alt="login" />
            </div>
            <div className='login-text'>
                <h4>معلومات الدفع</h4>
                <form className='payment-form'>
                    <div className='payment-choice'>
                        <div className='payment-item'>
                            <h5>اختر طريقة الدفع :</h5>
                            <div className='payment-method'>
                                <label>
                                    <input type="radio" name='payment' value='fawry' onChange={handlePaymentMethod} />
                                    <img src={fawry} alt='fawry' />
                                    <div className='payment-method-text'>
                                        <h6>فوري</h6>
                                        <small>+5 جنيه مصاريف فوري</small>
                                    </div>
                                </label>
                                <hr></hr>
                                <label>
                                    <input type="radio" name='payment' value='visa' onChange={handlePaymentMethod} />
                                    <img src={creditCard} alt='credit card' />
                                    <div className='payment-method-text'>
                                        <h6>بطاقة  ائتمان</h6>
                                        <small>فيزا أو ماستركارد</small>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className='payment-item'>
                            <h5>{
                                price === '50' ? 'اشتراك أسبوعي' :
                                    price === '150' ? 'اشتراك شهري' :
                                        price === '300' ? 'اشتراك 90 يوم' : ''

                            }</h5>
                            <hr></hr>
                            <h6>المبلغ الكلي :</h6>
                            <small>
                                EGP<span className='price'>{price}</span>
                            </small>
                        </div>
                    </div>
                    {method ?
                        <div className='payment-details'>
                            {method === 'fawry' ? <Fawry />
                                : method === 'visa' ? <Visa /> : ''}
                        </div>
                        : null}
                    <Link to='/dashboard' exact='true'>
                        <button className='primary-button'>تأكيد الإشتراك</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}
