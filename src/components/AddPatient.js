import React from 'react'
import up from '../assets/icons/up.png'
import down from '../assets/icons/down.png'
import phoneIcon from '../assets/icons/phone-icon.png'
import mail from '../assets/icons/mail.png'

export default function AddPatient({ setIsModalOpen, addPatient }) {
    const [age, setAge] = React.useState(45)
    function handleAge(name) {
        if (age >= 0 && age <= 120 && name === 'up') {
            setAge(age + 1)
        } else {
            setAge(age - 1)
        }
        setInputs({ ...inputs, age })
    }

    const [inputs, setInputs] = React.useState({
        name: '',
        age: '',
        phone: '',
        country: '',
        email: '',
        gender: ''
    })

    return (
        <div className='overlay'>
            <div className='modal'>
                <button id='x' onClick={() => setIsModalOpen(false)}>X</button>
                <form onSubmit={(e) => addPatient(e, inputs)}>
                    <label htmlFor='name'>
                        اسم المريض
                    </label>
                    <input type='text' name='name' id='name'
                        onChange={(e) => setInputs({ ...inputs, name: e.target.value })} required />
                    <label htmlFor='age'>
                        العمر
                        <div className='age-input'>
                            <input type='text' name='age' placeholder={age} id='age' onChange={(e) => setInputs({ ...inputs, age: e.target.value })} />
                            <img src={up} alt='up' id='up' className='icon' onClick={() => handleAge('up')} />
                            <img src={down} alt='down' id='down' className='icon' onClick={() => handleAge('down')} />
                        </div>
                    </label>
                    <div className='gender'>
                        <h6>النوع :</h6>
                        <div className='radio'>
                            <input type='radio'
                                onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
                                name='gender' id='female' value={'أنثى'} />
                            <label htmlFor='female'>أنثى</label>
                        </div>
                        <div className='radio'>
                            <input type='radio'
                                onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
                                name='gender' id='male' value={'ذكر'} />
                            <label htmlFor='male'>ذكر</label>
                        </div>
                    </div>
                    <div className='group'>
                        <label className='primary-label'>
                            <img src={phoneIcon} alt='phone' className='icon' />
                            <input className='primary-input' type="tel" placeholder='رقم الهاتف' maxLength={11}
                                onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
                            ></input>
                        </label>
                        <select className='country primary-select' onChange={(e) => setInputs({ ...inputs, country: e.target.value })}>
                            <option>البلد</option>
                            <option value='مصر'>مصر</option>
                            <option
                                value='المملكة العربية السعودية'
                            >المملكة العربية السعودية</option>
                            <option
                                value='الإمارات'
                            >الإمارات</option>
                        </select>
                    </div>
                    <label htmlFor='email'>
                        البريد الإلكتروني
                    </label>
                    <div className='email-section'>
                        <img src={mail} alt='mail' className='icon' />
                        <input type='email' name='email' id='email' onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
                    </div>
                    <div className='btn-wrapper'>
                        <button type='submit' className='primary-button'>حفظ</button>
                    </div>
                </form>
            </div>
        </div >
    )
}
