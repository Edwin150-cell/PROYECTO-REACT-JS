import { NavLink } from "react-router-dom";
import Contexto from "../context/Contexto";
import { useContext } from "react";
import Swal from "sweetalert2";

const Home = () => {
    const { usuario, cerrar_sesion } = useContext(Contexto);

    const logout = () => {
        Swal.fire({
            icon: "success",
            title: "Cerrando sesion!",
            text: "Estas siendo redirigido"
        });
        cerrar_sesion();
    };

    return (
        <div className="container mt-4">
            <h1>Home</h1>
            <p>{usuario?.usuario || usuario?.nombre}</p>
            <div className="mb-3">
                <NavLink to="/dashboard" className="btn btn-secondary me-2">Dashboard</NavLink>
                <NavLink to="/personajes" className="btn btn-info me-2">Personajes</NavLink>
            </div>
            <button onClick={() => logout()} className="btn btn-danger">Cerrar Sesion</button>
        </div>
    );
};

export default Home;