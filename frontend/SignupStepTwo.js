import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';

function SignupStepTwo() {

    const [values, setValues] = useState({
        age: '',
        weight: '',
        height: '',
        gender: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInput =(event) => {
        setValues(prev => ({...prev, [event.target.age]: [event.target.value]}))
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (Object.keys(errors).length === 0) {
            axios.post('http://localhost:8081/signupsteptwo', values)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <div className='d-flex justify-content-center allign-items-center bg-primary vh-100'>
            <div className='bg-white p-4 rounded w-25'>
                <h2>Sign-Up</h2>
                <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                        <label htmlFor="age"><strong>Age</strong></label>
                        <input type="text" placeholder='Enter Age' name='age'
                            onChange={handleInput} className='form control rounded 0' />
                        {errors.age && <span className='text-danger'> {errors.age}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="weight"><strong>Weight</strong></label>
                        <input type="text" placeholder='Enter Weight' name='weight'
                        onChange={handleInput} className='form control rounded 0' />
                        {errors.weight && <span className='text-danger'> {errors.weight}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="height"><strong>Height</strong></label>
                        <input type="text" placeholder='Enter Height' name='height'
                            onChange={handleInput} className='form control rounded 0' />
                        {errors.height && <span className='text-danger'> {errors.height}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="gender"><strong>Gender</strong></label>
                        <select name="gender" onChange={handleInput} className='form-control rounded-0'>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && <span className='text-danger'> {errors.gender}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'> Join the Club!</button>
                    <p>You are agree to our terms and policies</p>
                    <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    )
}

export default SignupStepTwo