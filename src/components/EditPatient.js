import React from 'react'
import location from '../assets/icons/location.png'
import phoneIcon from '../assets/icons/phone-icon.png'
import mail from '../assets/icons/mail.png'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export default function EditPatient({ patient, editPatient, setIsModalOpen }) {
    const [inputs, setInputs] = React.useState(patient)
    console.log(inputs)
    return (
        <div className='overlay'>
            <button className='close' onClick={() => setIsModalOpen(false)}>X</button>
            <form className='modal' onSubmit={(e) => editPatient(e, inputs)}>
                <div className='group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' value={inputs.name} onChange={(e) => setInputs({ ...inputs, name: e.target.value })} />
                </div>
                <div className='group'>
                    <label htmlFor='age'>النوع</label>
                    <input type='text' id='gender' readOnly={false} value={inputs.gender} onChange={(e) => setInputs({ ...inputs, gender: e.target.value })} />
                </div>
                <div className='group'>
                    <label htmlFor='age'>Age</label>
                    <input type='number' id='age' value={inputs.age} onChange={(e) => setInputs({
                        ...inputs, age:
                            Number(e.target.value)
                    })} />
                </div>
                <div className='group'>
                    <label htmlFor='location'>مكان الحجز</label>
                    <img src={location} alt='location pin' className='location' />
                    <input type='text' id='location' value={inputs.location} onChange={(e) => setInputs({ ...inputs, apppointments: [{ ...apppointments, location: e.target.value }] })} />
                </div>
                <div className='group'>
                    <label htmlFor='phone'>رقم الهاتف</label>
                    <img src={phoneIcon} alt='phone icon' className='phone-icon' />
                    <input type='text' id='phone' value={inputs.phone} onChange={(e) => setInputs({ ...inputs, phone: e.target.value })} />
                    <select className='country primary-select' onChange={(e) => setInputs({ ...inputs, country: e.target.value })}>
                        <option>البلد</option>
                        <option value='مصر'>مصر</option>
                        <option
                            value='المملكة العربية السعودية'
                        >المملكة العربية السعودية</option>
                        <option
                            value='الإمارات'
                        >الإمارات</option>
                    </select>
                </div>
                <div className='group'>
                    <label htmlFor='email'>البريد</label>
                    <img src={mail} alt='mail icon' className='mail-icon' />
                    <input type='email' id='email' value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
                </div>
                <h6>المواعيد المحجوزة :</h6>
                <div className='calendar'>
                    <Calendar
                        calendarType='Arabic' locale='ar-EG'
                        formatDay={(locale, date) => date.toLocaleDateString('US', { day: 'numeric' })}
                        formatYear={(locale, date) => date.toLocaleDateString('US', { year: 'numeric' })}
                    // onChange={(e) => setInputs({ ...inputs, apppointments: [{ ...apppointments, date: e }] })}
                    />
                </div>
            </form>
        </div>
    )
}
