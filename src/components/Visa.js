import React from 'react'
import credit from '../assets/icons/credit-card-big.png'

export default function Visa() {

    const visaNumberHandler = (e) => {
        e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    }

    const visaDateHandler = (e) => {
        e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{2})/g, '$1/').trim();
    }

    const cvvHandler = (e) => {
        e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{3})/g, '$1 ').trim();
    }

    return (
        <div className='visa'>
            <div className='img-container'>
                <img src={credit} alt='visa' />
            </div>
            <div className='visa-info'>
                <input required type='text' placeholder='رقم البطاقة' onChange={visaNumberHandler} maxLength='19' />
                <input required type='text' placeholder='اسم حامل البطاقة' />
                <label>
                    <input required type='text' placeholder='تاريخ الانتهاء' format='../..' onChange={visaDateHandler} maxLength='5' />
                    <span>(MM/YY)</span>
                </label>
                <input required type='tel' placeholder='قيمة التحقق من البطاقة' maxLength='3' pattern="[0-9]*" onChange={cvvHandler} />
            </div>
        </div>
    )
}
