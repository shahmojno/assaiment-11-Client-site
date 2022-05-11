import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1>login</h1>
            <form action="">
                <div>
                    <label htmlFor='email' >Email</label>
                    <input type="email" name="email" id="" />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="" />
                </div>
            </form>
            <p>
                new to inventory  <Link className='form-link' to="/signup">Create an account</Link>
            </p>
        </div>
    );
};

export default Login;