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
import plus from '../assets/icons/plus.png'
import AddPatient from './AddPatient';
import EditPatient from './EditPatient';

export default function Patients() {
    const patientsData = [
        {
            id: '1',
            name: 'كريم الموجي',
            img: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
            age: 20,
            gender: 'ذكر',
            phone: '01000000000',
            email: 'karim@example.com',
            patientAppointments: [
                {
                    id: '1',
                    date: new Date(),
                    dateText: '20 يونيو 2021 10:00 صباحاََ',
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
            patientAppointments: [
                {
                    id: '2',
                    date: new Date(),
                    dateText: '20 يونيو 2021 10:00 صباحاََ',
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
            patientAppointments: [
                {
                    id: '3',
                    date: new Date(),
                    dateText: '20 يونيو 2021 10:00 صباحاََ',
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
            patientAppointments: [
                {
                    id: '4',
                    date: new Date(),
                    dateText: '20 يونيو 2021 10:00 صباحاََ',
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
            patientAppointments: [
                {
                    id: '5',
                    date: new Date(),
                    dateText: '20 يونيو 2021 10:00 صباحاََ',
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
            patientAppointments: [
                {
                    id: '6',
                    date: new Date(),
                    dateText: '20 يونيو 2021 10:00 صباحاََ',
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
            patientAppointments: [
                {
                    id: '7',
                    date: new Date(),
                    dateText: '20 يونيو 2021 10:00 صباحاََ',
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
            patientAppointments: [
                {
                    id: '8',
                    date: new Date(),
                    dateText: '20 يونيو 2021 10:00 صباحاََ',
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
            patientAppointments: [
                {
                    id: '9',
                    date: new Date(),
                    dateText: '20 يونيو 2021 10:00 صباحاََ',
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
            patientAppointments: [
                {
                    id: '10',
                    date: new Date(),
                    dateText: '20 يونيو 2021 10:00 صباحاََ',
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
    const [patients, setPatients] = useState(patientsData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editPatientModal, setEditPatientModal] = useState(false);

    function handleNext() {
        if (currentPage === Math.ceil(patients.length / 5)) return
        setCurrentPage(currentPage + 1)
    }

    function searchPatient(e) {
        const searchValue = e.target.value;
        if (searchValue === '') {
            setPatients(patientsData);
        } else {
            setPatients(patientsData.filter(patient => patient.name.includes(searchValue)))
        }
    }

    function addPatient(e, patient) {
        e.preventDefault();
        const newPatient = {
            id: String(patients.length + 1),
            name: patient.name,
            age: Number(patient.age),
            gender: patient.gender,
            phone: patient.phone,
            img: '',
            email: patient.email,
            patientAppointments: [{
                id: String(patients.length + 1),
                date: { day: '', month: '', year: '' },
                time: '',
            }],
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
                    isDone: false,
                },
            ]
        }
        setPatients([newPatient, ...patients])
    }

    function editPatient(e, patient) {
        e.preventDefault();
        const newPatients = patients.map(p => {
            if (p.id === patient.id) {
                return patient
            } else {
                return p
            }
        })
        setPatients(newPatients)
    }

    return (
        <main className="patients-page">
            <div className='secondary-nav patients-nav'>
                <div></div>
                <Link to='/dashboard/settings'>
                    <div className='profile'>
                        <h6>د. {user.name}</h6>
                        <img src={`${user.img ? user.img : userImg}`}
                            className={` ${user.img ? 'user-img' : 'default-img'}`} alt='profile' />
                    </div>
                </Link>
            </div>
            <Sidebar />
            <div className='main-content'>
                <div className='search'>
                    <img src={searchIcon} alt='search' />
                    <input type='text' placeholder='بحث عن مريض ...' onChange={(e) => searchPatient(e)} />
                </div>
                <div className='patients'>
                    <div className='add'>
                        <button onClick={() => setIsModalOpen(true)}>
                            <img src={plus} alt='add' />
                            <h6>إضافة مريض</h6>
                        </button>
                    </div>
                    {isModalOpen && (
                        <AddPatient setIsModalOpen={setIsModalOpen} addPatient={addPatient} />
                    )}
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
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {patients.slice((currentPage - 1) * 5, currentPage * 5).map(patient => (
                                    <tr key={patient.id}>
                                        <td id='name'>{patient.name}</td>
                                        <td>{patient.gender || 'X'}</td>
                                        <td>{patient.age || 'X'}</td>
                                        <td className='appointment'>
                                            <h6>
                                                {patient.patientAppointments[0].location === 'clinic' ?
                                                    <img src={location} alt='clinic' className='location' /> :
                                                    patient.patientAppointments[0].location === 'phone' ?
                                                        <img src={phone} alt='phone' className='location' /> : null}
                                                {
                                                    // check if there is an appointment
                                                    patient.patientAppointments[0].dateText ? patient.patientAppointments[0].dateText :
                                                        'X'
                                                }
                                            </h6>
                                        </td>
                                        <td>{patient.phone || 'X'}</td>
                                        <td>{patient.email || 'X'}</td>
                                        <td id='tests'>
                                            <h6>
                                                {patient.tests.length != 0 ? patient.tests.map(test => (
                                                    <small key={test.type} className={`${test.isDone && 'is-done'}`} >
                                                        {test.isDone && <img src={checkmark} alt='checkmark' />}
                                                        {test.type}
                                                    </small>
                                                )) : 'X'}
                                            </h6>
                                        </td>
                                        <td id='imgs'>
                                            <h6>
                                                <Link to='/dashboard/diagnosis'>
                                                    <img src={report} alt='go to diagnosis page' />
                                                </Link>
                                                <Link to='/dashboard/chat'>
                                                    <img src={chat} alt='go to chat page' />
                                                </Link>

                                                <img src={dots} alt='more options' onClick={() => setEditPatientModal(true)} id='dots' />
                                                {editPatientModal && (
                                                    <EditPatient
                                                        isModalOpen={editPatientModal}
                                                        setIsModalOpen={setEditPatientModal}
                                                        editPatient={editPatient}
                                                        patient={patient}
                                                    />
                                                )}
                                            </h6>
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
