import { Link, useNavigate } from 'react-router-dom';
import './LoginCard.css';
import { useState } from 'react';
import axios from 'axios';
import { Base_Url } from '../../Authentication/Register/Register';

const LoginCard = () => {
    const navigate = useNavigate();
    const [formData, setformData] = useState({
        email: '',
        password: ''
    });
    

    const handleLogin = async(e) => {
        e.preventDefault();
        try{
        const response = await axios.post(`${Base_Url}/api/login`, formData,{
            headers:{
                "content-type":"application/json"
            }
        });
        alert("Login Successfull,Let Go and Purchase");
        navigate('/')
        console.log(response.data)
    }catch(err){
        console.log('Internal Error');
        alert('Login Failed,Invalid Email or Password')
    }
        console.log("Email:", formData.email, "Password:", formData.password);
    }


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setformData(formData=>({
             ...formData, [name]: value 
            }));
    };
    
    return ( 
        <div className="login__card__container">
            <div className="login__card">
                <div className="login__header">
                    <h1>Login</h1>
                </div>
                <form className="login__inputs" onSubmit={(e)=>handleLogin(e)}>
                <div className="">
                    <div className="email__input__container input__container">
                        <label className="email__label input__label">Email</label>
                        <input type="email" className="email__input login__input" 
                        placeholder='example@gmail.com' 
                        value={formData.email}
                        onChange={(e)=>handleInputChange(e)}
                        name='email'
                        required
                        />
                    </div>
                    <div className="password__input__container input__container">
                        <label className="password__label input__label" >Password</label>
                        <input type="password" className="password__input login__input"
                         placeholder='**********'
                         value={formData.password}
                         onChange={(e)=>handleInputChange(e)}
                         name='password'
                         required
                         />
                    </div>
                    <div className="login__button__container">
                        <button type="submit" className="login__button" >LOGIN</button>
                    </div>
                </div>
                </form>
                <div className="login__other__actions">
                    <div className="login__forgot__password">Forgot password?</div>
                    <div className="login__new__account">Don't have account? <Link to="/account/register">Create account</Link> </div>
                </div>
            </div>
        </div>
     );
}
 
export default LoginCard;