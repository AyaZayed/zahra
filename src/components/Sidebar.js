import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import appointment from '../assets/icons/appointment.png'
import chat from '../assets/icons/chat.png'
import report from '../assets/icons/medical-reports.png'
import diagnosis from '../assets/icons/diagnosis.png'
import settings from '../assets/icons/settings.png'

export default function Sidebar() {
    const location = useLocation()

    return (
        <div className="sidebar">
            <NavLink to='/appointments' className={location.pathname === "/dashboard/appointments" ? "sidebar-item active" : "sidebar-item"}>
                <img src={appointment} alt='appointments timetable' />
                <h6>الحجوزات</h6>
            </NavLink>
            <NavLink to='/patients' className={location.pathname === "/dashboard/patients" ? "sidebar-item active" : "sidebar-item"}>
                <img src={report} alt='medical report' />
                <h6>المرضى</h6>
            </NavLink>
            <NavLink to='/chat' className={location.pathname === "/dashboard/chat" ? "sidebar-item active" : "sidebar-item"}>
                <img src={chat} alt='messages' />
                <h6>المحادثات</h6>
            </NavLink>
            <NavLink to='/diagnosis' className={location.pathname === "/dashboard/diagnosis" ? "sidebar-item active" : "sidebar-item"}>
                <img src={diagnosis} alt='magnifying glass' />
                <h6>أداة الفحص</h6>
            </NavLink>
            <NavLink to='/settings' className={location.pathname === "/dashboard/settings" ? "sidebar-item active" : "sidebar-item"}>
                <img src={settings} alt='wheel' />
                <h6>الإعدادات</h6>
            </NavLink>
        </div>
    )
}
