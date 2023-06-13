import React from 'react'
import fawryIcon from '../assets/icons/fawry-title.png'

export default function Fawry() {
    const hours = 12;
    const minutes = 0;
    const fawryNumber = 5000054855;
    return (
        <div className='fawry'>
            <h5>الدفع عن طريق <img src={fawryIcon} alt='fawry-icon' /></h5>
            <small>يجب عليك دفع المبلغ خلال</small>
            <div className='time'>
                <h6><span className='minutes'>{minutes}</span>minutes</h6>
                <h6><span className='hours'>{hours}</span>hours</h6>
            </div>
            <small>وإلا سيتم إلغاء الاشتراك</small>
            <small>الرقم المرجعي لفوري</small>
            <h6>{fawryNumber}</h6>
        </div>
    )
}
