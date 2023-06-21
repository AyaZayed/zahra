import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import userImg from '../assets/icons/user.png'
import Sidebar from './Sidebar'
import zahra from '../assets/logo/purple-logo.png'
import search from '../assets/icons/magnifying-glass.png'

export default function Diagnosis() {
    const user = {
        name: 'ماهر عمر',
        //img: 'https://i.pinimg'
    }

    const patientsData = [
        'محمد علي',
        'محمد علي',
        'محمد علي',
        'محمد علي',
        'محمد علي',
        'محمد علي',
        'محمد علي',
    ]

    const [patients, setPatients] = useState(patientsData)

    const [selectedPatient, setSelectedPatient] = React.useState('')
    const [diagnosisType, setDiagnosisType] = React.useState('')

    function searchPatient(e) {
        const searchValue = e.target.value;
        if (searchValue === '') {
            setPatients(patientsData);
        } else {
            setPatients(patientsData.filter(patient => patient.name.includes(searchValue)))
        }
    }

    return (
        <div className='diagnosis-page'>
            <nav className='diagnosis-nav'>
                <Link to='/dashboard/settings'>
                    <div className='profile'>
                        <h6>د. {user.name}</h6>
                        <img src={`${user.img ? user.img : userImg}`}
                            className={` ${user.img ? 'user-img' : 'default-img'}`} alt='profile' />
                    </div>
                </Link>
            </nav>
            <Sidebar />
            <form className='diagnosis-content' style={{ padding: '6rem' }}
                onSubmit={(e) => {
                    e.preventDefault();
                    // redirect to diagnosis tool page
                    window.location.href = `/dashboard/diagnosis/tool?patient=${selectedPatient}&type=${diagnosisType}`
                }}>
                <img src={zahra} alt='zahra logo' className='zahra-logo' />
                <label>
                    <img src={search} alt='search' />
                    <select className='primary-select' onChange={(e) => setSelectedPatient(e.target.value)}>
                        <option>أدخل اسم المريض ...</option>
                        {patients.map((patient, index) => <option value={patient} key={index}>{patient}</option>)}
                    </select>
                </label>
                <h6>اختر نوع الفحص </h6>
                <div className='diagnosis-types'>
                    <button type='submit' className='diagnosis-type' onClick={(e) => setDiagnosisType('CSD')}>CSD</button>
                    <button type='submit' className='diagnosis-type' onClick={(e) => setDiagnosisType('Pathology')}>Pathology</button>
                    <button type='submit' className='diagnosis-type' onClick={(e) => setDiagnosisType('DNA')}>DNA</button>
                </div>
            </form>
        </div >
    )
}
