import React, {useState}  from 'react';
import { Link ,  useNavigate } from 'react-router-dom';
import Card from '../components/shared/Card';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

function Signup() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await createUserWithEmailAndPassword(auth , email, password)
        .then((userCredential) => {
            //Signed In
            updateProfile(userCredential.user, {displayName: name})
     
            const user = userCredential.user;
            console.log(user);
            navigate('/login');
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
        })



    }

    return (
        <Card>
            <h2>Register Now</h2>

            <form className='login' autoComplete="off">
                <input type="text" id="name" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} />
                <input type="email" placeholder='Enter your email'  id="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder='Enter your password' id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                <p>Already having an account <Link to='/login'>Login</Link> </p>
                <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Sign Up</button>
            </form>
        </Card>
    );
}

export default Signup;
