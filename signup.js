import { registrar } from "./session.js";

const render = () => {
    const signUpButton = document.querySelector("#signUpButton");
    const popup = document.getElementById("popup");
    const closeButton = document.querySelector(".close-button");
    const redirectLoginButton = document.getElementById("redirect-login");

    const togglePopup = () => {
        popup.style.display = popup.style.display === "block" ? "none" : "block";
    };

    signUpButton.addEventListener("click", (e) => {
        e.preventDefault();

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("correo").value;
        const password = document.getElementById("contrasena").value;
        const confirmPassword = document.getElementById("confirmarContrasena").value;

        try {
            registrar(firstName, lastName, email, password, confirmPassword);
            togglePopup();
        } catch (error) {
            alert(error.message);
        }
    });

    if (closeButton) {
        closeButton.addEventListener("click", togglePopup);
    }

    if (redirectLoginButton) {
        redirectLoginButton.addEventListener("click", () => {
            window.location.href = "login.html";
        });
    }

    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            togglePopup();
        }
    });
};

document.addEventListener("DOMContentLoaded", render);
