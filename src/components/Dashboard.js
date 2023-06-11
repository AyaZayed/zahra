import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from 'react'
import appointment from '../assets/icons/appointment.png'
import medicalReport from '../assets/icons/medical-reports.png'
import chat from '../assets/icons/chat.png'
import diagnosis from '../assets/icons/diagnosis.png'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    const [user, setUser] = useState('ماهر')
    const [appointments, setAppointments] = useState([{
        patient: 'كريم الموجي',
        patientImage: 'https://res.cloudinary.com/dcfrq5i2y/image/upload/v1625327505/samples/people/smiling-man.jpg',
        location: 'العيادة',
        date: 'الأحد 8 يناير',
        time: '10:00 صباحاََ',
    },
    {
        patient: 'كريم الموجي',
        patientImage: 'https://res.cloudinary.com/dcfrq5i2y/image/upload/v1625327505/samples/people/smiling-man.jpg',
        location: 'العيادة',
        date: 'الأحد 8 يناير',
        time: '10:00 صباحاََ',
    },
    {
        patient: 'كريم الموجي',
        patientImage: 'https://res.cloudinary.com/dcfrq5i2y/image/upload/v1625327505/samples/people/smiling-man.jpg',
        location: 'العيادة',
        date: 'الأحد 8 يناير',
        time: '10:00 صباحاََ',
    }
    ])
    return (
        <>
            <Navbar landing={false} />
            <main className='dashboard-page'>
                <div className='features'>
                    <h6>مرحباََ , {user}.</h6>
                    <p>
                        نتمنى لك يوماََ لطيفاََ ^-^</p>
                    <div className='features-list'>
                        <Link to='/dashboard/appointments' exact='true'>
                            <div className='features-item'>
                                <img src={appointment} alt='appointment timetable' />
                                <h6>الحجوزات</h6>
                            </div>
                        </Link>
                        <Link to='/dashboard/patients' exact='true'>
                            <div className='features-item'>
                                <img src={medicalReport} alt='medical report' />
                                <h6>قائمة المرضى</h6>
                            </div>
                        </Link>
                        <Link to='/dashboard/chat' exact='true'>
                            <div className='features-item'>
                                <img src={chat} alt='chat' />
                                <h6>المحادثات</h6>
                            </div>
                        </Link>
                        <Link to='/dashboard/diagnosis' exact='true'>
                            <div className='features-item'>
                                <img src={diagnosis} alt='diagnosis tool' />
                                <h6>أداة الفحص</h6>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='appointments'>
                    <h6>مواعيد قريبة</h6>
                    <div className='appointments-list'>
                        {appointments.map((appointment, index) => {
                            return (
                                <div className='appointments-item' key={index}>
                                    <div className='patient-info'>
                                        <img src={appointment.patientImage} alt='patient' />
                                        <h6>{appointment.patient}</h6>
                                    </div>
                                    <div className='appointments-item-text'>
                                        <small>{appointment.location}</small>
                                        <small>{appointment.date}</small>
                                        <small>{appointment.time}</small>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
