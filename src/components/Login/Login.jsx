import React, { useContext } from 'react';
import "./Login.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContextProvider } from '../../Provider/AuthProvider';
const Login = () => {
    const {logInUser}= useContext(AuthContextProvider);
    const location = useLocation();
    const navigate = useNavigate()

    const fromLocation = location.state?.from?.pathname || "/";
    console.log(location)
    const handleLogIn = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        logInUser(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(fromLocation, {replace:true});
        })
        .catch(error =>{
            console.log(error)
        })
    }
    
    return (
        <div>
            <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogIn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required />
                    
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-john? <Link to="/signup">Create New Account</Link></small></p>
        </div>
        </div>
    );
};

export default Login;