import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Home() {


    function getDayName(date = new Date()) {
        const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        const day = date.getDay();
        return days[day];
    }
    
    const today = new Date();
    const dayName = getDayName(today);

    return (
        <div className='d-flex justify-content-center allign-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Hola getName()</h2>
                <h3>Hoy es {dayName}</h3>
                <Link 
                    to='/userpage' 
                    className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                    
                    
                    User Page 
                </Link>
            </div>
        </div>
    )
}

export default Home;