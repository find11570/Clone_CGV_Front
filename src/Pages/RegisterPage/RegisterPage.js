import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Footer from "../../components/Footer/Footer";

const RegisterPage = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <RegisterForm/>
            <Footer/>
        </div>
    );
};

export default RegisterPage;
