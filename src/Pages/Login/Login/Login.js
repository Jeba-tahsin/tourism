import React from 'react';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Login = () => {
    return (
        <div>
            <h2 className='text-primary'>Sign in to Book our service</h2>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Login;