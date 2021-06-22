import React, {useState} from 'react';
import './loginForm.css';
import {useHistory} from "react-router";


export const LoginForm = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const history = useHistory();

    const body = {
        email: email,
        password: password
    }

    const handleLogin = () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        fetch("http://127.0.0.1:5001/login", options)
            .then(response => response.json())
            .then(json => {
                    localStorage.setItem('token', json.token)
                    localStorage.setItem('user', JSON.stringify(json.user))
                    history.replace('/user')
                    window.location.reload(false);
                }
            )
            .catch(error => {
                setError(true);
            })
    }

    return (
        <>
            <div className="login__container">
               <form>
                   <div className="form__container">
                       <label className="form__label">
                           Email
                       </label>
                       <input
                           placeholder="Enter your Email here..."
                           className="form__input"
                           type="text" name="email"
                           onChange={(e) => setEmail(e.target.value)}
                       />
                       <label className="form__label">
                           Password
                       </label>
                       <input
                           placeholder="Enter your password here..."
                           className="form__input"
                           type="password"
                           name="password"
                           onChange={(e) => setPassword(e.target.value)}
                       />
                       {error && <p className="error__message">Something went wrong...</p>}
                       <div className="login__button" onClick={handleLogin}>
                            <p>Login!</p>
                       </div>
                   </div>
               </form>
            </div>
        </>
    )
}


export default LoginForm;