import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Patients() {
    const location = useLocation();
    const sayHi = location.state;

    sayHi()
    return (
        <div>Patients</div>
    )
}
