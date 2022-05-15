import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './SignUp.css'



const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);


    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/home');
    }




    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Your two password did not match");
            return;
        }

        if (password.length < 6) {
            setError('Password must be 6 character or longer');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container mt-5'>
            <div>
                <h1 className='form-title mt-2'>SignUp</h1>
                <form onSubmit={handleCreateUser}>
                    <div >
                        <label htmlFor='email'>Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' id='' required />
                        <div >
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                        </div>
                        <div >
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                        </div>
                        <p style={{ color: 'red' }}>{error}
                        </p>                        <input className='mx-auto mt-2 mb-2' type="submit" value="Signup" />
                    </div>
                </form>
                <p>
                    Already have an account? <Link
                        to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;









