import React from 'react'
import location from '../assets/icons/location.png'
import phoneIcon from '../assets/icons/phone-icon.png'
import mail from '../assets/icons/mail.png'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Appointment from './Appointment'
import { useState } from 'react'

export default function EditPatient({ patient, editPatient, setIsModalOpen, isModalOpen }) {
    const [appointmentsList, setAppointmentsList] = useState([{
        id: '1',
        patientName: 'محمد علي',
        patientImg: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
        location: 'العيادة',
        date: { day: 20, month: 'يونيو', year: 2023 },
        time: '10:00 صباحاََ',
        age: 20,
        hasPaid: true,
        payment: 100,
    },
    {
        id: '2',
        patientName: 'جميلة حسن',
        patientImg: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
        location: 'العيادة',
        date: { day: 20, month: 'يونيو', year: 2023 },
        time: '10:00 صباحاََ',
        age: 20,
        hasPaid: true,
        payment: 100,
    },
    {
        id: '3',
        patientName: 'أحمد علي',
        patientImg: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
        location: 'العيادة',
        date: { day: 20, month: 'يونيو', year: 2023 },
        time: '10:00 صباحاََ',
        age: 20,
        hasPaid: true,
        payment: 100,
    },
    {
        id: '4',
        patientName: 'كريم الموجي',
        patientImg: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
        location: 'العيادة',
        date: { day: 21, month: 'يونيو', year: 2023 },
        time: '10:00 صباحاََ',
        age: 20,
        hasPaid: true,
        payment: 100,
    }
    ])

    const deleteAppointment = (id) => {
        setAppointmentsList(appointmentsList.filter(appointment => appointment.id !== id))
    }
    const [inputs, setInputs] = React.useState(patient)

    console.log(inputs)

    return (
        <div className='edit-patient'>
            <div className='overlay'>
                <form className='modal' onSubmit={(e) => editPatient(e, inputs)}>
                    <div className='main'>
                        <button className='close' id='x' onClick={() => setIsModalOpen(false)}>X</button>
                        <div className='inputs'>
                            <div className='group'>
                                <label htmlFor='nameInput' className='label'>Name</label>
                                <input type='text' id='nameInput' value={inputs.name} className='name' onChange={(e) => setInputs({ ...inputs, name: e.target.value })} />
                            </div>
                            <div className='group'>
                                <label htmlFor='age' className='label'>النوع</label>
                                <input type='text' id='gender' readOnly={false} value={inputs.gender} onChange={(e) => setInputs({ ...inputs, gender: e.target.value })} />
                            </div>
                            <div className='group'>
                                <label htmlFor='age' className='label'>Age</label>
                                <input type='number' id='age' value={inputs.age} onChange={(e) => setInputs({
                                    ...inputs, age:
                                        Number(e.target.value)
                                })} />
                            </div>
                            <div className='group'>
                                <label htmlFor='location' className='label'>مكان الحجز</label>
                                <img src={location} alt='location pin' className='location icon'
                                    onChange={(e) => setInputs({
                                        ...inputs,
                                        patientAppointments: [...patient.patientAppointments, { location: e.target.value }]
                                    })} />
                                <input type='text' id='location' value={inputs.location} />
                            </div>
                            <div className='group'>
                                <label htmlFor='phone' className='label'>رقم الهاتف</label>
                                <img src={phoneIcon} alt='phone icon' className='phone-icon icon' />
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
                                <label htmlFor='email' className='label'>البريد</label>
                                <img src={mail} alt='mail icon' className='mail-icon icon' />
                                <input type='email' id='email' value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
                            </div>
                        </div>
                        <div className='calendar'>
                            <h6>المواعيد المحجوزة :</h6>
                            <Calendar
                                calendarType='Arabic' locale='ar-EG'
                                formatDay={(locale, date) => date.toLocaleDateString('US', { day: 'numeric' })}
                                formatYear={(locale, date) => date.toLocaleDateString('US', { year: 'numeric' })}
                                next2Label={null}
                                prev2Label={null}
                                onChange={(e) => setInputs({
                                    ...inputs, patientAppointments: [...patient.patientAppointments, { date: e },
                                        // { dateText: e.toLocaleString('ar', { day: 'numeric', month: 'long', year: 'numeric' }) }
                                    ]
                                })} />
                        </div>
                        <div className='appointments'>
                            {appointmentsList.filter(appointment => appointment.patientName === patient.name).map(appointment => (
                                <Appointment dashboard={false} key={appointment.id} appointment={appointment} deleteAppointment={deleteAppointment} />
                            ))}
                        </div>
                    </div>
                    <button className='primary-button' type='submit'>حفظ</button>
                </form>
            </div>
        </div>
    )
}
