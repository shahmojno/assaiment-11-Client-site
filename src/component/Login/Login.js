import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleUsersSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log('error', error);
            })
    }


    return (
        <div >

            <div className='form-container mt-5'>
                <div >
                    <h1 className='form-title mx-auto mt-2'>Login</h1>
                    <form onSubmit={handleUsersSignIn}>
                        <div >
                            <label htmlFor='email'>Email</label>
                            <input onBlur={handleEmailBlur} type="email" name='email' id='' required />
                            <div >
                                <label htmlFor="password">password</label>
                                <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                            </div>
                            <p style={{ color: 'red' }}>{error?.message}</p>
                            {
                                loading && <p> Loading...</p>
                            }
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                    <p >
                        NewT o Smart Phone? <Link to="/signup">Create an account</Link>
                    </p>
                    <button className='mb-5' onClick={handleGoogleSignIn}>Google Sign In</button>
                </div>
            </div>

        </div>
    );
};

export default Login;