import { login } from "./session.js";

const render = () => {
    const loginButton = document.querySelector("#login-button");

    loginButton.addEventListener("click", (e) => {
        e.preventDefault();

        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        try {
            login(email, password);
            window.location.href = "../Main Page/mainpage.html";
        } catch (error) {
            alert(error.message);
        }
    });
};

document.addEventListener("DOMContentLoaded", render);
