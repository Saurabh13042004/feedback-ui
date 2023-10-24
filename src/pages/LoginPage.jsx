import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../components/shared/Card';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import Spinner from '../components/shared/Spinner';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errmsg, setErrmsg] = useState(null);
    const navigate = useNavigate();
    const [isLoading,setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/home');
        } catch (error) {
            const errorMessage = error.message;
            setErrmsg(errorMessage);
            console.log(errorMessage);
        }
        setIsLoading(false);
    };

    return (
        <Card>
            <h2>Login</h2>

            <form className='login' autoComplete='off'>
                <input
                    type='email'
                    placeholder='Enter your email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='Enter your password'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errmsg && <p style={{ color: 'red' }}>{errmsg}</p>}

                <p className='my-2'>
           
                    Do not have an account ? <Link to='/'>Sign Up</Link>
                </p>
                <button type='submit' className='btn btn-primary' onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ? <Spinner/> : 'Login'}
                </button>
            </form>
        </Card>
    );
}

export default Login;
