import React, { useState } from 'react'
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import userImg from '../assets/icons/user.png'
import before from '../assets/icons/before.png'
import next from '../assets/icons/next.png'
import searchIcon from '../assets/icons/magnifying-glass.png'
import location from '../assets/icons/location.png'
import phone from '../assets/icons/purple-phone.png'
import checkmark from '../assets/icons/check.png'
import report from '../assets/icons/report.png'
import chat from '../assets/icons/chat.png'
import dots from '../assets/icons/dots.png'

export default function Patients() {
    const patients = [
        {
            id: '1',
            name: 'كريم الموجي',
            img: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
            age: 20,
            gender: 'ذكر',
            phone: '01000000000',
            email: 'karim@example.com',
            appointments: [
                {
                    id: '1',
                    date: { day: 20, month: 'يونيو', year: 2023 },
                    time: '10:00 صباحاََ',
                    location: 'clinic',
                }
            ],
            tests: [
                {
                    type: 'CT',
                    isDone: true,
                },
                {
                    type: 'Path',
                    isDone: false,
                },
                {
                    type: 'DNA',
                    isDone: true,
                },
            ]
        },
        {
            id: '2',
            name: 'محمد علي',
            img: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
            age: 20,
            gender: 'ذكر',
            phone: '01000000000',
            email: 'mo@example.com',
            appointments: [
                {
                    id: '2',
                    date: { day: 20, month: 'يونيو', year: 2023 },
                    time: '10:00 صباحاََ',
                    location: 'phone',
                }
            ],
            tests: [
                {
                    type: 'CT',
                    isDone: true,
                },
                {
                    type: 'Path',
                    isDone: false,
                },
                {
                    type: 'DNA',
                    isDone: true,
                },

            ]
        },
        {
            id: '3',
            name: 'أحمد علي',
            img: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
            age: 20,
            gender: 'ذكر',
            phone: '01000000000',
            email: 'ahmed@example.com',
            appointments: [
                {
                    id: '3',
                    date: { day: 20, month: 'يونيو', year: 2023 },
                    time: '10:00 صباحاََ',
                    location: 'phone',
                }
            ],
            tests: [
                {
                    type: 'CT',
                    isDone: true,
                },
                {
                    type: 'Path',
                    isDone: false,
                },
                {
                    type: 'DNA',
                    isDone: false,
                },

            ]
        },
        {
            id: '4',
            name: 'زينب محمد',
            img: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
            age: 20,
            gender: 'أنثى',
            phone: '01000000000',
            email: 'zainab@example.com',
            appointments: [
                {
                    id: '4',
                    date: { day: 20, month: 'يونيو', year: 2023 },
                    time: '10:00 صباحاََ',
                    location: 'clinic',
                }
            ],
            tests: [
                {
                    type: 'CT',
                    isDone: false,
                },
                {
                    type: 'Path',
                    isDone: false,
                },
                {
                    type: 'DNA',
                    isDone: true,
                },

            ]
        },
        {
            id: '5',
            name: 'جميلة حسن',
            img: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
            age: 20,
            gender: 'أنثى',
            phone: '01000000000',
            email: 'jamilah@example.com',
            appointments: [
                {
                    id: '5',
                    date: { day: 20, month: 'يونيو', year: 2023 },
                    time: '10:00 صباحاََ',
                    location: 'phone',
                }
            ],
            tests: [
                {
                    type: 'CT',
                    isDone: true,
                },
                {
                    type: 'Path',
                    isDone: false,
                },
                {
                    type: 'DNA',
                    isDone: true,
                },

            ]
        },
        {
            id: '6',
            name: 'يوسف راتب',
            img: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
            age: 20,
            gender: 'ذكر',
            phone: '01000000000',
            email: 'karim@example.com',
            appointments: [
                {
                    id: '6',
                    date: { day: 20, month: 'يونيو', year: 2023 },
                    time: '10:00 صباحاََ',
                    location: 'clinic',
                }
            ],
            tests: [
                {
                    type: 'CT',
                    isDone: true,
                },
                {
                    type: 'Path',
                    isDone: false,
                },
                {
                    type: 'DNA',
                    isDone: true,
                },
            ]
        },
        {
            id: '7',
            name: 'محمد علي',
            img: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
            age: 20,
            gender: 'ذكر',
            phone: '01000000000',
            email: 'mo@example.com',
            appointments: [
                {
                    id: '7',
                    date: { day: 20, month: 'يونيو', year: 2023 },
                    time: '10:00 صباحاََ',
                    location: 'phone',
                }
            ],
            tests: [
                {
                    type: 'CT',
                    isDone: true,
                },
                {
                    type: 'Path',
                    isDone: false,
                },
                {
                    type: 'DNA',
                    isDone: true,
                },

            ]
        },
        {
            id: '8',
            name: 'أحمد علي',
            img: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
            age: 20,
            gender: 'ذكر',
            phone: '01000000000',
            email: 'ahmed@example.com',
            appointments: [
                {
                    id: '8',
                    date: { day: 20, month: 'يونيو', year: 2023 },
                    time: '10:00 صباحاََ',
                    location: 'phone',
                }
            ],
            tests: [
                {
                    type: 'CT',
                    isDone: true,
                },
                {
                    type: 'Path',
                    isDone: false,
                },
                {
                    type: 'DNA',
                    isDone: false,
                },

            ]
        },
        {
            id: '9',
            name: 'زينب محمد',
            img: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
            age: 20,
            gender: 'أنثى',
            phone: '01000000000',
            email: 'zainab@example.com',
            appointments: [
                {
                    id: '9',
                    date: { day: 20, month: 'يونيو', year: 2023 },
                    time: '10:00 صباحاََ',
                    location: 'clinic',
                }
            ],
            tests: [
                {
                    type: 'CT',
                    isDone: false,
                },
                {
                    type: 'Path',
                    isDone: false,
                },
                {
                    type: 'DNA',
                    isDone: true,
                },

            ]
        },
        {
            id: '10',
            name: 'جميلة حسن',
            img: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
            age: 20,
            gender: 'أنثى',
            phone: '01000000000',
            email: 'jamilah@example.com',
            appointments: [
                {
                    id: '10',
                    date: { day: 20, month: 'يونيو', year: 2023 },
                    time: '10:00 صباحاََ',
                    location: 'phone',
                }
            ],
            tests: [
                {
                    type: 'CT',
                    isDone: true,
                },
                {
                    type: 'Path',
                    isDone: false,
                },
                {
                    type: 'DNA',
                    isDone: true,
                },

            ]
        },
    ]

    const user = {
        name: 'ماهر عمر',
        //img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
    };

    const [currentPage, setCurrentPage] = useState(1);

    function handleNext() {
        if (currentPage === Math.ceil(patients.length / 5)) return
        setCurrentPage(currentPage + 1)
    }

    return (
        <main className="patients-page">
            <div className='patients-nav'>
                <Link to='/dashboard/settings'>
                    <div className='profile'>
                        <h6>د. {user.name}</h6>
                        <img src={`${user.img ? user.img : userImg}`}
                            className={` ${user.img ? 'user-img' : 'default-img'}`} alt='profile' />
                    </div>
                </Link>
            </div>
            <Sidebar />
            <div className='main-content' style={{ padding: '6rem' }}>
                <div className='search'>
                    <img src={searchIcon} alt='search' />
                    <input type='text' placeholder='بحث عن مريض ...' />
                </div>
                <div className='patients'>
                    <div className='patients-header'>
                        <h5>
                            {patients.length <= 10 ? `${patients.length} مرضى` : `${patients.length} مريض`}
                        </h5>
                        <div className='next-pages'>
                            <button disabled={currentPage < 2} className='previous-page' onClick={() => setCurrentPage(currentPage - 1)}>
                                <img src={before} alt='previous' />
                            </button>
                            <h6>{Math.ceil(patients.length / 5)} / <span className='current'>{currentPage}</span></h6>
                            <button className='next-page' onClick={handleNext}>
                                <img src={next} alt='next' />
                            </button>
                        </div>
                    </div>
                    <div className='patients-list'>
                        <table>
                            <thead>
                                <tr>
                                    <th>الاسم</th>
                                    <th>النوع</th>
                                    <th>العمر</th>
                                    <th>الحجز</th>
                                    <th>رقم الهاتف</th>
                                    <th>البريد</th>
                                    <th>الفحوص</th>
                                </tr>
                            </thead>
                            <tbody>
                                {patients.slice((currentPage - 1) * 5, currentPage * 5).map(patient => (
                                    <tr key={patient.id}>
                                        <td>{patient.name}</td>
                                        <td>{patient.gender}</td>
                                        <td>{patient.age}</td>
                                        <td>{patient.appointments[0].location === 'clinic' ?
                                            <img src={location} alt='clinic' className='location' /> :
                                            patient.appointments[0].location === 'phone' ?
                                                <img src={phone} alt='phone' className='location' /> : null}</td>
                                        <td>{patient.phone}</td>
                                        <td>{patient.email}</td>
                                        <td>
                                            {patient.tests.map(test => (
                                                <small className={`${test.isDone && 'is-done'}`} >
                                                    {test.isDone && <img src={checkmark} alt='checkmark' />}
                                                    {test.type}
                                                </small>
                                            ))}
                                        </td>
                                        <td>
                                            <Link to='/dashboard/diagnosis'>
                                                <img src={report} alt='go to diagnosis page' />
                                            </Link>
                                            <Link to='/dashboard/chat'>
                                                <img src={chat} alt='go to chat page' />
                                            </Link>
                                            <Link to='/dashboard/settings'>
                                                <img src={dots} alt='go to settings page' />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}
