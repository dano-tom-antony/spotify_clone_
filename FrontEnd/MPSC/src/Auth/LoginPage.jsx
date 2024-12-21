import React, { useState } from 'react'
import './music.css'
import { useAuthStore } from '../store/useAuthStore';
import { Music, Eye, EyeOff, Lock, Mail, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './signup.css'
import logo from '../assets/assets/logo.png'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState(null);

    const { login, isLoggingIn } = useAuthStore();

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.email || !formData.password) {

            setError("Both email and password are required!");
            return;
        }

        setError(null);
        if(await login(formData)){
            navigate('/home')
        }
    };


    const navigate = useNavigate()
    return (
        <div className='login'>

            <div className='loginForm_sign_in'>
                <div className='image'>
                    <img src={logo} alt="Currently Down"></img>
                </div>
                <div className='form'>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} placeholder="E-mail" />
                        <input type="password" value={formData.password} onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }} placeholder="Password" />
                        <button >Login</button>
                        <p className='not-a-user'>Not a User? <span onClick={() => navigate('/register')}>Sign Up</span> </p>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default LoginPage