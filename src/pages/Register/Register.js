import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import style from './a.module.css';
import TextBox from '../../components/TextBox/TextBox';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import { baseUrl } from '../../App';
import emailIcon from '../../assets/icons/material-symbols_mail.svg';
import passwordIcon from '../../assets/icons/mdi_password.svg';
import nameIcon from "../../assets/icons/profile.svg";

const Register = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            toast.error('Please fill in all fields');
            return;
        }

        try {
            const data = await axios.post(baseUrl + '/auth/signup', {
                name,
                email,
                password,
            });

            toast.success('User registered successfully. Please login to continue.');
            navigate('/login');
        } catch (error) {
            if (error.response && error.response.data) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Error registering user. Please try again later.');
            }
        }
    };

    return (
        <div className={style.main}>
            <h1 className={style.title}>Create an account</h1>
            <div className={style.registerForm}>
                <TextBox type="text" placeholder="Name" icon={nameIcon} value={name} onChange={(e) => setName(e.target.value)} inputBox={true} />
                <TextBox type="email" placeholder="Email" icon={emailIcon} value={email} onChange={(e) => setEmail(e.target.value)} inputBox={true} />
                <TextBox type="password" placeholder="Password" icon={passwordIcon} value={password} onChange={(e) => setPassword(e.target.value)} inputBox={true} />
                <TextBox type="password" placeholder="Confirm Password" icon={passwordIcon} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} inputBox={true} />
            </div>
            <div className={style.formFooter}>
                <div className={style.signInBtn} onClick={handleSignUp}><PrimaryButton title="Register" /></div>
                <h2 className={style.registerTransfer} onClick={() => navigate('/login')}>Already have an account? <span className={style.register}>Login here</span></h2>
            </div>
        </div>
    );
}

export default Register;
