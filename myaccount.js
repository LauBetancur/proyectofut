import { obtenerUsuarioEnSesion, logout, actualizarUsuario } from './session.js';

const render = () => {
    const usuarioActivo = obtenerUsuarioEnSesion();

    console.log('Usuario activo:', usuarioActivo); // Debugging statement

    if (!usuarioActivo) {
        window.location.href = '/index.html';
        return;
    }

    document.getElementById('firstName').value = usuarioActivo.firstName || '';
    document.getElementById('lastName').value = usuarioActivo.lastName || '';
    document.getElementById('email').value = usuarioActivo.email || '';

    document.getElementById('changeButton').addEventListener('click', () => {
        const oldPassword = document.getElementById('oldPassword').value;
        const newPassword = document.getElementById('newPassword').value;

        if (oldPassword !== usuarioActivo.password) {
            alert('Old password is incorrect.');
            return;
        }

        if (newPassword) {
            usuarioActivo.password = newPassword;
            actualizarUsuario(usuarioActivo);
            alert('Password updated successfully.');
        } else {
            alert('New password cannot be empty.');
        }
    });

    document.getElementById('logoutButton').addEventListener('click', () => {
        logout();
        window.location.href = '../index.html';
    });
};

document.addEventListener('DOMContentLoaded', render);
