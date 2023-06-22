import React from 'react'
import locationPin from '../assets/icons/location.png'
import money from '../assets/icons/money.png'
import circle from '../assets/icons/circle.png'
import clock from '../assets/icons/time.png'

export default function Appointment({ appointment, deleteAppointment, dashboard = false }) {

    return (
        <div className={`appointments-item ${dashboard ? 'dashboard' : 'card'}`} key={appointment.id} >
            <div className='patient-info'>
                <div className='img-container'>
                    <img src={appointment.patientImg} alt='patient' />
                    <h6>{appointment.patientName}</h6>
                </div>
                {!dashboard &&
                    <div className='cancel-wrapper'>
                        <button className='cancel-btn' onClick={() => deleteAppointment(appointment.id)} >إلغاء الحجز</button>
                    </div>
                }
            </div>
            <div className='appointments-item-text'>
                {!dashboard &&
                    <small><img src={circle} alt='hollow circle' />{appointment.age} سنة</small>
                }
                <small><img src={locationPin} alt='location pin' />موعد ب{appointment.location}</small>
                {!dashboard &&
                    appointment.hasPaid && <small><img src={money} alt='money' />تم استلام : {appointment.payment}</small>
                }
                <small>
                    <img src={clock} alt='clock' />
                    {appointment.date.day} {appointment.date.month} {appointment.date.year} {appointment.time}
                </small>
            </div>
        </div >
    )
}
