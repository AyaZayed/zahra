import React, { useEffect, useState } from 'react'
import userImg from '../assets/icons/user.png'
import Sidebar from './Sidebar'
import { Link, useLocation } from 'react-router-dom';
import refresh from '../assets/icons/refresh.png'
import search from '../assets/icons/purple-search.png'
import locationPin from '../assets/icons/location.png'
import money from '../assets/icons/money.png'
import circle from '../assets/icons/circle.png'
import clock from '../assets/icons/time.png'

export default function Appointments() {
    const user = {
        name: 'ماهر عمر',
        //img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
    };
    const dateArr = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9,
            10, 11, 12, 13, 14, 15, 16,
            17, 18, 19, 20, 21, 22, 23,
            24, 25, 26, 27, 28, 29, 30, 31
        ],
        ['يناير', 'فبراير', 'مارس', 'أبريل',
            'مايو', 'يونيو', 'يوليو', 'أغسطس',
            'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
        [2021, 2022, 2023, 2024, 2025]
    ];

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

    const today = {
        day: Number(new Date().getDate()),
        month: dateArr[1][new Date().getMonth()],
        year: Number(new Date().getFullYear())
    };

    const [showAll, setShowAll] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [pickedDate, setPickedDate] = useState({
        day: today.day,
        month: today.month,
        year: today.year
    });

    const [shownAppointments, setShownAppointments] = useState(appointments);

    useEffect(() => {
        if (showAll) {
            setShownAppointments(appointments);
        } else {
            setShownAppointments(appointments.filter(appointment => {
                return appointment.date.day === pickedDate.day &&
                    appointment.date.month === pickedDate.month &&
                    appointment.date.year === pickedDate.year
            }))
        }
    }, [showAll, pickedDate, appointments])


    const deleteAppointment = (id) => {
        setAppointments(appointments.filter(appointment => appointment.id !== id))
    }

    function searchAppointments(e) {
        const searchValue = e.target.value;
        if (searchValue === '') {
            setShownAppointments(appointments);
        } else {
            setShownAppointments(appointments.filter(appointment => appointment.patientName.includes(searchValue)))
        }
    }

    return (
        <main className='appointments-page'>
            <div className='appointments-nav'>
                <h6 id='list'>قائمة المواعيد</h6>
                <Link to='/dashboard/settings'>
                    <div className='profile'>
                        <h6>د. {user.name}</h6>
                        <img src={`${user.img ? user.img : userImg}`}
                            className={` ${user.img ? 'user-img' : 'default-img'}`} alt='profile' />
                    </div>
                </Link>
            </div>
            <div className='show-all'>
                <input type='checkbox' name='show-all' id='show-all' onChange={() => setShowAll(!showAll)} />
                <label htmlFor='show-all'>عرض الكل</label>
            </div>
            <Sidebar />
            <div className='main-content'>
                <div className='date-picker'>
                    <img src={refresh} alt='refresh' />
                    <div className='date-info'>
                        <div className='selects'>
                            <select name='day' id='day' className='top-right-curve'
                                onChange={(e) => setPickedDate({ ...pickedDate, day: Number(e.target.value) })}>
                                <option value=''>اليوم</option>
                                {dateArr[0].map(day => <option key={day} value={day}>{day}</option>)}
                            </select>
                            <select name='month' id='month'
                                onChange={(e) => setPickedDate({ ...pickedDate, month: e.target.value })}>
                                <option value=''>الشهر</option>
                                {dateArr[1].map(month => <option key={month} value={month}>{month}</option>)}
                            </select>
                            <select name='year' id='year' className='top-left-curve'
                                onChange={(e) => setPickedDate({ ...pickedDate, year: Number(e.target.value) })}>
                                <option value=''>السنة</option>
                                {dateArr[2].map(year => <option key={year} value={year}>{year}</option>)}
                            </select>
                        </div>
                        <div className='today'>
                            <small className='bottom-right-curve'>{pickedDate.day}</small>
                            <small>{pickedDate.month}</small>
                            <small className='bottom-left-curve'>{pickedDate.year}</small>
                        </div>
                    </div>
                    <img src={search} alt='search appointments' onClick={() => setIsSearching(!isSearching)} />
                </div>
                {isSearching && <input type='text' name='search' id='search' placeholder='بحث...'
                    onChange={(e) => searchAppointments(e)} />}
                <div className='appointments'>
                    {shownAppointments.length !== 0 ? shownAppointments.map(appointment => {
                        return (
                            <div className='appointments-item' key={appointment.id} >
                                <div className='patient-info'>
                                    <div className='img-container'>
                                        <img src={appointment.patientImg} alt='patient' />
                                        <h6>{appointment.patientName}</h6>
                                    </div>
                                    <div className='cancel-wrapper'>
                                        <button className='cancel-btn' onClick={() => deleteAppointment(appointment.id)} >إلغاء الحجز</button>
                                    </div>
                                </div>
                                <div className='appointments-item-text'>
                                    <small><img src={circle} alt='hollow circle' />{appointment.age} سنة</small>
                                    <small><img src={locationPin} alt='location pin' />موعد ب{appointment.location}</small>
                                    {appointment.hasPaid && <small><img src={money} alt='money' />تم استلام : {appointment.payment} جنيه</small>}
                                    <small>
                                        <img src={clock} alt='clock' />
                                        {appointment.date.day} {appointment.date.month} {appointment.date.year} {appointment.time}
                                    </small>
                                </div>
                            </div>)
                    }) : <h5>لا توجد مواعيد</h5>}
                </div>
            </div>
        </main >
    )
}
