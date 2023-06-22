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
    const [result, setResult] = React.useState('')

    React.useEffect(() => {
        if (file) {
            // analyze file
            setResult('Cancer')
        }
    }, [file])

    return (
        <div className='tool-page'>
            <nav className='secondary-nav diagnosis-nav'>
                <div></div>
                <div className='tabs'>
                    <h6 className={`${type === 'FNA Biopsy' ? 'active' : 'tab'}`}>CT (FNA Biopsy)</h6>
                    <h6 className={`${type === 'Pathology' ? 'active' : 'tab'}`}>PATH</h6>
                    <h6 className={`${type === 'DNA' ? 'active' : 'tab'}`}>DNA</h6>
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
            <div className='tool-content'>
                {!file &&
                    (<div>
                        <h6>رجاء إضافة الملفات بالامتدادت التالية فقط :</h6>
                        <ul>
                            <li>-.fasta</li>
                            <li>-.fastq</li>
                        </ul>
                    </div>)}
                <div className='content'>
                    <form className='tool-form'
                        onSubmit={(e) => {
                            e.preventDefault();
                            // redirect to diagnosis tool page
                            if (file && result) {
                                window.location.href = `/dashboard/diagnosis/result?patient=${patient}&type=${type}
                                    &result=${result}`
                            }
                        }}
                    >
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
                    {
                        result &&
                        <div className='analysis'>
                            <h6>النتيجة : {result}</h6>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
