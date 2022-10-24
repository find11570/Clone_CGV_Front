import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './LoginForm.css';
import Api from '../../Api/Api';

const LoginForm = () => {
    const navigate = useNavigate();
    const [id, setId] = useState();
    const [password, setPassword] = useState();

    const loginBtn = async() => {
        var i = document.getElementById("login-id").value;
        var p = document.getElementById("login-password").value;
        const response = await Api.postLogin(i, p);
        console.log(response);
        if (response.success === true) {
            alert("로그인 성공");
            sessionStorage.setItem("user_id", response.user_id);
            var link = document.location.href;
            if (link.includes("ticket")) {
                if (response.user_id === 1) {
                    navigate("/theater");
                } else {
                    navigate("/ticket", { state: { movie_name: "범죄도시2" } });
                }

            } else {
                navigate("/");
            }
        } else {
            alert("로그인 실패");
        }
    };

    return ( <
        section className = 'login-form-box' >
        <
        div style = {
            { margin: "10px" }
        } > 아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요. < /div> <
        input id = 'login-id'
        type = "text"
        value = { id }
        /> <
        input id = 'login-password'
        type = "password"
        value = { password }
        /> <
        button id = 'login-btn'
        onClick = { async() => await loginBtn() } > 로그인 < /button> < /
        section >
    );
};

export default LoginForm;