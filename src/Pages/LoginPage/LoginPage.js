import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import LoginForm from '../../components/LoginForm/LoginForm';
import Footer from "../../components/Footer/Footer";
const LoginPage = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <LoginForm/>
            <Footer/>
        </div>
    );
};

export default LoginPage;