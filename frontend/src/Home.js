import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Home() {
    return (
        <div className='d-flex justify-content-center allign-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Hola getName()</h2>
                <Link> to="/UserPage" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>User Page </Link>
            </div>
        </div>
    )
}

export default Home;