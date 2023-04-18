import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContextProvider } from '../../Provider/AuthProvider';

const SingUp = () => {
    const[error, setError] = useState('');
    const {sinUpUser} = useContext(AuthContextProvider);


    const handleSingUp = (e) =>{
        event.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        setError('')
        if(password !== confirm){
            setError("Password and Confirm Password do not match.");
           
            return
        }else if(password.length < 6){
            setError("Password at least 6 characters");
            return
        }


        //console.log(email,password);
        sinUpUser(email, password)
        .then(result => {
            const logged = result.user;
            console.log(logged)
            form.reset();
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div>
            <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSingUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p><small>Already have an account? <Link to="/login">Login</Link></small></p>
            <p >{error}</p>
        </div>
            
        </div>
    );
};

export default SingUp;