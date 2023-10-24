import React, {useState}  from 'react';
import { Link ,  useNavigate } from 'react-router-dom';
import Card from '../components/shared/Card';
import { signInWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';

function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await signInWithEmailAndPassword (auth , email, password)
        .then((userCredential) => {
            //Signed In
     
            const user = userCredential.user;
            console.log(user);
            navigate('/home');
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
        })



    }

    return (
        <Card>
            <h2>Login</h2>

            <form className='login' autoComplete="off">
                <input type="email" placeholder='Enter your email'  id="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder='Enter your password' id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                <p> Do not have an account ?  <Link to='/'>Sign Up</Link> </p>
                <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Log In</button>
            </form>
        </Card>
    );
}

export default Login
