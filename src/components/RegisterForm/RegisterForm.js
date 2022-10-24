import React, {useState} from 'react';
import './RegisterForm.css';

const RegisterForm = () => {

    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [phone, setPhone] = useState("");
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const onIdHandler = (e) => {
        setId(e.currentTarget.value);
    }

    const onPwHandler = (e) => {
        setPw(e.currentTarget.value);
    }

    const onNameHandler = (e) => {
        setName(e.currentTarget.value);
    }

    const onBirthHandler = (e) => {
        setBirth(e.currentTarget.value);
    }

    const onPhoneHandler = (e) => {
        setPhone(e.currentTarget.value);
    }    
    

    return (
        <section className='register-form-box'>
            <div style={{margin: "10px"}}>회원정보를 입력하신 후, 회원가입 버튼을 클릭해 주세요.</div>
            <input id='register-input' type="text" value={name} placeholder='  name' onClick={onNameHandler} />
            <input id='register-input' type="text" value={id} placeholder='  id' onClick={onIdHandler} />
            <input id='register-input' type="password" value={pw} placeholder='  pw' onClick={onPwHandler} />
            <input id='register-input' type="text" value={birth} placeholder='  birth' onClick={onBirthHandler} />
            <input id='register-input' type="text" value={phone} placeholder='  phone' onClick={onPhoneHandler} />
            <button id='register-btn'><div>회원가입</div></button>
        </section>
    );
};

export default RegisterForm;