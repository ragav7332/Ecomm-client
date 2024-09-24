// import { Link } from 'react-router-dom';
// import './RegisterCard.css';

// const RegisterCard = () => {
//     return ( 
//         <div className="register__card__container">
//             <div className="register__card">
//                 <div className="register__header">
//                     <h1>Create Account</h1>
//                 </div>
//                 <div className="register__inputs">
//                 <div className="fname__input__container reg__input__container">
//                         <label className="fname__label input__label">First name</label>
//                         <input type="text" className="fname__input register__input" />
//                     </div>
//                     <div className="lname__input__container reg__input__container">
//                         <label className="lname__label input__label">Last name</label>
//                         <input type="text" className="lname__input register__input"/>
//                     </div>
//                     <div className="email__input__container reg__input__container">
//                         <label className="email__label input__label">Email</label>
//                         <input type="email" className="email__input register__input" placeholder='example@gmail.com' />
//                     </div>
//                     <div className="password__input__container reg__input__container">
//                         <label className="password__label input__label">Password</label>
//                         <input type="password" className="password__input register__input" />
//                     </div>
//                     <div className="register__button__container">
//                         <button className="register__button" >Create Account</button>
//                     </div>
//                 </div>
//                 <div className="register__other__actions">
//                     <div className="register__login__account">Already have account? <Link to="/account/login">Login</Link></div>
//                 </div>
//             </div>
//         </div>
//      );
// }
 
// export default RegisterCard;

import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './RegisterCard.css'; // assuming you have a CSS file for styling
import { Base_Url } from '../../Authentication/Register/Register';

const RegisterCard = () => {
    const navigate = useNavigate();
    // State to handle form inputs
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    // Handle form field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const restform =()=>{
        setFormData({
            firstName:'',
            lastName:'',
            email:'',
            password:''
        })
    }

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${Base_Url}/api/register`, formData,{
                headers:{
                    "content-type":"application/json"
                }
            });
            console.log(response.data);
            
            alert(response.data.message);
            setTimeout(() => {
                navigate('/account/login')

            }, 3000);
            restform();

            
        } catch (error) {
            console.error("Error registering user", error);
            alert('Registration failed. Try again.');
        }
    };

    return (
        <div className="register__card__container">
            <div className="register__card">
                <div className="register__header">
                    <h1>Create Account</h1>
                </div>
                <form onSubmit={handleSubmit} className="register__inputs">
                    <div className="fname__input__container reg__input__container">
                        <label className="fname__label input__label">First name</label>
                        <input 
                            type="text" 
                            name="firstName" 
                            className="fname__input register__input" 
                            value={formData.firstName} 
                            onChange={handleInputChange} 
                            required 
                        />
                    </div>
                    <div className="lname__input__container reg__input__container">
                        <label className="lname__label input__label">Last name</label>
                        <input 
                            type="text" 
                            name="lastName" 
                            className="lname__input register__input" 
                            value={formData.lastName} 
                            onChange={handleInputChange} 
                            required 
                        />
                    </div>
                    <div className="email__input__container reg__input__container">
                        <label className="email__label input__label">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            className="email__input register__input" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                            placeholder='example@gmail.com' 
                            required 
                        />
                    </div>
                    <div className="password__input__container reg__input__container">
                        <label className="password__label input__label">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            className="password__input register__input" 
                            value={formData.password} 
                            onChange={handleInputChange} 
                            required 
                        />
                    </div>
                    <div className="register__button__container">
                        <button type="submit" className="register__button">Create Account</button>
                    </div>
                </form>
                <div className="register__other__actions">
                    <div className="register__login__account">Already have an account? <Link to="/account/login">Login</Link></div>
                </div>
            </div>
        </div>
    );
};

export default RegisterCard;
