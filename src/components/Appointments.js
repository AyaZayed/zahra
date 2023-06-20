import React, { useEffect, useState } from 'react'
import userImg from '../assets/icons/user.png'
import Sidebar from './Sidebar'
import { Link, useLocation } from 'react-router-dom';
import refresh from '../assets/icons/refresh.png'
import search from '../assets/icons/purple-search.png'
import locationPin from '../assets/icons/location.png'
import money from '../assets/icons/money.png'
import circle from '../assets/icons/circle.png'


export default function Appointments() {
    const user = {
        name: 'ماهر عمر',
        //img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
    };
    const dateArr = [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        ['يناير', 'فبراير', 'مارس', 'أبريل',
            'مايو', 'يونيو', 'يوليو', 'أغسطس',
            'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
        ['2021', '2022', '2023', '2024', '2025']
    ];
    const today = {
        day: new Date().getDate(),
        month: dateArr[1][new Date().getMonth()],
        year: new Date().getFullYear()
    };

    const location = useLocation();
    const appointments = location.state;

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
            setShownAppointments(appointments)
        }
        else {
            appointments.filter((appointment) => {
                return appointment.date.day === pickedDate.day &&
                    appointment.date.month === pickedDate.month &&
                    appointment.date.year === pickedDate.year
            })
        }
    }, [appointments, pickedDate, showAll])

    function deleteAppointment(id) {
        setShownAppointments(shownAppointments.filter(appointment => appointment.id !== id))
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
                                onChange={(e) => setPickedDate({ ...pickedDate, day: e.target.value })}
                            >
                                <option value=''>اليوم</option>
                                {dateArr[0].map(day => <option key={day} value={day}>{day}</option>)}
                            </select>
                            <select name='month' id='month'
                                onChange={(e) => setPickedDate({ ...pickedDate, month: e.target.value })}
                            >
                                <option value=''>الشهر</option>
                                {dateArr[1].map(month => <option key={month} value={month}>{month}</option>)}
                            </select>
                            <select name='year' id='year' className='top-left-curve'
                                onChange={(e) => setPickedDate({ ...pickedDate, year: e.target.value })}
                            >
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
                {isSearching && <input type='text' name='search' id='search' placeholder='بحث...' />}
                <div className='appointments'>
                    {shownAppointments ? shownAppointments.map(appointment => {
                        return (
                            <div className='appointments-item' key={appointment.id}>
                                <div className='patient-info'>
                                    <div className='img-container'>
                                        <img src={appointment.patientImg} alt='patient' />
                                        <h6>{appointment.patientName}</h6>
                                    </div>
                                    <div className='cancel-wrapper'>
                                        <small id='date'>{appointment.date.day} {appointment.date.month} {appointment.date.year} {appointment.time}</small>
                                        <button className='cancel-btn' onClick={() => deleteAppointment(appointment.id)} >إلغاء الحجز</button>
                                    </div>
                                </div>
                                <div className='appointments-item-text'>
                                    <small><img src={circle} alt='hollow circle' />{appointment.age}</small>
                                    <small><img src={locationPin} alt='location pin' />موعد ب{appointment.location}</small>
                                    {appointment.hasPaid && <small><img src={money} alt='money' />تم استلام : {appointment.payment} جنيه</small>}
                                </div>
                            </div>
                        )
                    })
                        : <p>لا توجد مواعيد</p>}
                </div>
            </div>
        </main>
    )
}
