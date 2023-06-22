import React from 'react'
import { Link } from 'react-router-dom'
import userImg from '../assets/icons/user.png'
import Sidebar from './Sidebar';
import cancel from '../assets/icons/cancel.png'

export default function Result() {
    const user = {
        name: 'ماهر عمر',
        //img: 'https://i.pinimg'
    }

    const urlParams = new URLSearchParams(window.location.search);
    const patient = urlParams.get('patient');
    const type = urlParams.get('type');
    const result = urlParams.get('result');

    const [isModalOpen, setIsModalOpen] = React.useState(false)


    return (
        <div className='result-page'>
            <nav className='secondary-nav diagnosis-nav'>
                <div></div>
                <div className='tabs'>
                    <h6 className={`${type == 'FNA Biopsy' ? 'active' : 'tab'}`}>CT (FNA Biopsy)</h6>
                    <h6 className={`${type == 'Pathology' ? 'active' : 'tab'}`}>PATH</h6>
                    <h6 className={`${type == 'DNA' ? 'active' : 'tab'}`}>DNA</h6>
                </div>
                <Link to='/dashboard/settings'>
                    <div className='profile'>
                        <h6>د. {user.name}</h6>
                        <img src={`${user.img ? user.img : userImg}`}
                            className={` ${user.img ? 'user-img' : 'default-img'}`} alt='profile' />
                    </div>
                </Link>
            </nav>
            <Sidebar />
            <div className='result-content'>
                <div className='result-details'>
                    <div className='row'>
                        <h6></h6>
                        <h6>Radius mean :</h6>
                    </div>
                    <div className='row'>
                        <h6></h6>
                        <h6>Texture mean :</h6>
                    </div>
                    <div className='row'>
                        <h6></h6>
                        <h6>Perimeter mean :</h6>
                    </div>
                    <div className='row'>
                        <h6></h6>
                        <h6>Area mean :</h6>
                    </div>
                    <div className='row'>
                        <h6></h6>
                        <h6>Smoothness mean :</h6>
                    </div>
                    <div className='row'>
                        <h6></h6>
                        <h6>Compactness mean:</h6>
                    </div>
                    <div className='row'>
                        <h6></h6>
                        <h6>Concavity mean:</h6>
                    </div>
                    <div className='row'>
                        <h6></h6>
                        <h6>Concave points mean :</h6>
                    </div>
                    <div className='row'>
                        <h6></h6>
                        <h6>Symmetry mean :</h6>
                    </div>
                </div>
                <div className='result'>
                    <h6>النتيجة :{result} </h6>
                </div>
                <button className='primary-button' onClick={() => setIsModalOpen(true)}>تحليل البيانات</button>
            </div>
            {isModalOpen &&
                <div className='overlay'>
                    <div className='modal'>
                        <button id='x' onClick={() => setIsModalOpen(false)}>X</button>
                        <div className='content'>
                            <h6>هل ترغب فى حفظ النتيجة وإضافتها لسجل المريض ؟</h6>
                            <div className='buttons'>
                                <button className='primary-button'>حفظ</button>
                                <button className='primary-button'><img src={cancel} alt='x' />إلغاء</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
