import React from 'react'
import { Link } from 'react-router-dom'
import userImg from '../assets/icons/user.png'
import Sidebar from './Sidebar';
import addFile from '../assets/icons/add-file.png'
import download from '../assets/icons/download.png'

export default function Tool() {
    const user = {
        name: 'ماهر عمر',
        //img: 'https://i.pinimg'
    }
    // get data from url
    const urlParams = new URLSearchParams(window.location.search);
    const patient = urlParams.get('patient');
    const type = urlParams.get('type');

    const [file, setFile] = React.useState(null)
    const [hasAnalyzed, setHasAnalyzed] = React.useState(false)

    console.log(file)

    return (
        <div className='tool-page'>
            <nav className='diagnosis-nav'>
                <h6 className={`${type === 'CSD' ? 'active' : 'tab'}`}>CT (CSD)</h6>
                <h6 className={`${type === 'Pathology' ? 'active' : 'tab'}`}>PATH</h6>
                <h6 className={`${type === 'DNA' ? 'active' : 'tab'}`}>DNA</h6>
                <Link to='/dashboard/settings'>
                    <div className='profile'>
                        <h6>د. {user.name}</h6>
                        <img src={`${user.img ? user.img : userImg}`}
                            className={` ${user.img ? 'user-img' : 'default-img'}`} alt='profile' />
                    </div>
                </Link>
            </nav>
            <Sidebar />
            <div className='tool-content' style={{ padding: '6rem' }}>
                <h6>رجاء إضافة الملفات بالامتدادت التالية فقط :</h6>
                <ul>
                    <li>-.fasta</li>
                    <li>-.fastq</li>
                </ul>
                <form className='tool-form'>
                    {/* file input */}
                    <div className='file-input'>
                        <label htmlFor='file' className='file'>
                            <img src={addFile} alt='add file' />
                            <small>قم بسحب االملف الذى تريده و اتركه هنا </small>
                            <small>أو</small>
                            <small>يمكنك اختيار الملف <span> بالضغط هنا </span></small>
                            {/* select only fasta or fastaq */}
                            <input type='file' id='file' accept='.fasta,.fastq'
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </label>
                    </div>
                    <button className='primary-button'>تحليل الملف <img src={download} alt='arrow down' /></button>
                </form>
            </div>
        </div>
    )
}
