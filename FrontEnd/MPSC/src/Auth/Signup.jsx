import React, { useState } from "react";
import './signup.css'
import logo from '../assets/assets/logo.png'
import { useNavigate } from "react-router-dom";


import { Music, User, Mail, Lock, EyeOff, Eye, Loader2 } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import toast from 'react-hot-toast';



export default function SignUp() {


    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    const { signup, isSigningUp } = useAuthStore();

    const validateForm = () => {
        if (!formData.fullName.trim()) return toast.error("Full name is required");
        if (!formData.email.trim()) return toast.error("Email is required");
        if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
        if (!formData.password.trim()) return toast.error("Password is required");
        if (formData.password.length < 6) return toast.error("Password must be atleast 6 characters");
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const success = validateForm();
        if (success === true) signup(formData);
        setFormData({ ...formData, password: "", email: "", fullName: "" })
    }

    return (
        <div className='sign_up'>
            <div className='loginForm'>
                <div className='image'>
                    <img src={logo} alt="Currently Down"></img>
                </div>
                <div className='form'>
                    <form onSubmit={handleSubmit}>
                        <input type="email" value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} placeholder="Enter your email id" />
                        <input type="text" value={formData.fullName} onChange={(e) => { setFormData({ ...formData, fullName: e.target.value }) }} placeholder="fullName" />
                        <input type="password" value={formData.password} onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }} placeholder="Password" />
                        <button type="submit">Create Account</button>
                        <p>Already a User? <span onClick={() => navigate('/')}>Sign In</span></p>
                    </form>

                </div>
            </div>
        </div>
    )
}