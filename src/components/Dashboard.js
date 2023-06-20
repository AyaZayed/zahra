import React from 'react'
import { useState } from 'react'
import appointment from '../assets/icons/appointment.png'
import medicalReport from '../assets/icons/medical-reports.png'
import chat from '../assets/icons/chat.png'
import diagnosis from '../assets/icons/diagnosis.png'
import location from '../assets/icons/location.png'
import time from '../assets/icons/time.png'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    const [user, setUser] = useState('ماهر')
    const [appointments, setAppointments] = useState([{
        id: '1',
        patientName: 'كريم الموجي',
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

    const baby = 'baby'
    return (
        <main className='dashboard'>
            <div className='features'>
                <h6>مرحباََ , {user}.</h6>
                <p>
                    نتمنى لك يوماََ لطيفاََ ^-^</p>
                <div className='features-wrapper'>
                    <div className='features-list'>
                        <NavLink to={'/dashboard/appointments'} exact='true' >
                            <div className='features-item'>
                                <img src={appointment} alt='appointment timetable' />
                                <h6>الحجوزات</h6>
                            </div>
                        </NavLink>
                        <NavLink to='/dashboard/patients' exact='true'>
                            <div className='features-item'>
                                <img src={medicalReport} alt='medical report' />
                                <h6>قائمة المرضى</h6>
                            </div>
                        </NavLink>
                        <NavLink to='/dashboard/chat' exact='true'>
                            <div className='features-item'>
                                <img src={chat} alt='chat' />
                                <h6>المحادثات</h6>
                            </div>
                        </NavLink>
                        <NavLink to='/dashboard/diagnosis' exact='true'>
                            <div className='features-item'>
                                <img src={diagnosis} alt='diagnosis tool' />
                                <h6>أداة الفحص</h6>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='appointments'>
                <div className='heading-text'>
                    <h6>مواعيد قريبة</h6>
                    <Link to='/dashboard/appointments' exact='true'>المزيد</Link>
                </div>
                <div className='appointments-wrapper'>
                    <div className='appointments-list'>
                        {/* limit appointments to 3 */}
                        {appointments.slice(0, 3).map((appointment) => {
                            return (
                                <div className='appointments-item' key={appointment.id}>
                                    <div className='patient-info'>
                                        <img src={appointment.patientImg} alt='patient' />
                                        <h6>{appointment.patientName}</h6>
                                    </div>
                                    <div className='appointments-item-text'>
                                        <small><img src={location} alt='location pin' />{appointment.location}</small>
                                        <small><img src={time} alt='clock' />{appointment.date.day} {appointment.date.month} {appointment.date.year} {appointment.time}</small>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </main>
    )
}
