const USERS_KEY = "usuarios";
const SESSION_KEY = "sesion";

export function registrarUsuario({ nombre, email, password }) {
  const usuarios = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

  if (usuarios.some((u) => u.email === email)) {
    return { ok: false, error: "Ese correo ya está registrado" };
  }

  usuarios.push({ nombre, email, password });
  localStorage.setItem(USERS_KEY, JSON.stringify(usuarios));
  return { ok: true };
}

export function iniciarSesion(email, password) {
  const usuarios = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  const usuario = usuarios.find(
    (u) => u.email === email && u.password === password
  );

  if (!usuario) {
    return { ok: false, error: "Correo o contraseña incorrectos" };
  }

  localStorage.setItem(
    SESSION_KEY,
    JSON.stringify({ nombre: usuario.nombre, email: usuario.email })
  );
  return { ok: true };
}

export function cerrarSesion() {
  localStorage.removeItem(SESSION_KEY);
}

export function obtenerSesion() {
  return JSON.parse(localStorage.getItem(SESSION_KEY));
}