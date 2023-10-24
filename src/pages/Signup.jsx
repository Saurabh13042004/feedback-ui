import React, {useState}  from 'react';
import { Link ,  useNavigate } from 'react-router-dom';
import Card from '../components/shared/Card';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import Spinner from '../components/shared/Spinner';

function Signup() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errmsg, setErrmsg] = useState(null);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setIsLoading(true);
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
            setErrmsg(errorMessage);
            console.log(errorCode,errorMessage);
        })
        setIsLoading(false);



    }

    return (
        <Card>
            <h2>Register Now</h2>

            <form className='login' autoComplete="off">
                <input type="text" id="name" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} />
                <input type="email" placeholder='Enter your email'  id="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder='Enter your password' id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                {errmsg && <p style={{ color: 'red' }}>{errmsg}</p>}

                <p className='my-2'>Already having an account <Link to='/login'>Login</Link> </p>
                <button type='submit' className='btn btn-primary ' onClick={handleSubmit} disabled={isLoading}>{isLoading?<Spinner/>:'Signup'}</button>
            </form>
        </Card>
    );
}

export default Signup;
