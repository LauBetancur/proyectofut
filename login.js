import { login } from "./session.js";

const render = () => {
    const loginButton = document.querySelector("#login-button");

    loginButton.addEventListener("click", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            login(email, password);
            alert("User logged in successfully!");
            window.location.href = "myaccount.html";
        } catch (error) {
            alert(error.message);
        }
    });
};

document.addEventListener("DOMContentLoaded", render);
