const USUARIOS_KEY = "usuarios";
const USUARIO_ACTIVO_KEY = "usuario-activo";

const obtenerUsuarios = () => {
    const usuarios = localStorage.getItem(USUARIOS_KEY);

    if (!usuarios) {
        return [];
    }

    return JSON.parse(usuarios);
};

export const registrar = (firstName, lastName, email, password, confirmPassword) => {
    if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
    }

    const usuarios = obtenerUsuarios();

    for (const usuario of usuarios) {
        if (usuario.email === email) {
            throw new Error("Email is already registered");
        }
    }

    usuarios.push({
        id: new Date().getTime(),
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        favoritos: [],
    });

    localStorage.setItem(USUARIOS_KEY, JSON.stringify(usuarios));
};

export const login = (email, password) => {
    const usuarios = obtenerUsuarios();
    for (const usuario of usuarios) {
        if (usuario.email === email && usuario.password === password) {
            localStorage.setItem(USUARIO_ACTIVO_KEY, usuario.id);
            return usuario;
        }
    }

    throw new Error("Incorrect email or password");
};

export const obtenerUsuarioEnSesion = () => {
    const usuarioActivo = localStorage.getItem(USUARIO_ACTIVO_KEY);

    if (!usuarioActivo) {
        return null;
    }

    const usuarios = obtenerUsuarios();
    for (const usuario of usuarios) {
        if (usuario.id === parseInt(usuarioActivo)) {
            return usuario;
        }
    }

    return null;
};

export const logout = () => {
    localStorage.removeItem(USUARIO_ACTIVO_KEY);
};