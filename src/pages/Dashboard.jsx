import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Contexto from "../context/Contexto";
import Swal from "sweetalert2";

function Dashboard() {
    const navigate = useNavigate();
    const { usuario, cerrar_sesion } = useContext(Contexto);

    const salir = () => {
        Swal.fire({
            icon: "success",
            title: "Cerrando sesion!",
            text: "Estas siendo redirigido"
        });
        cerrar_sesion();
        navigate("/login");
    };

    return (
        <div className="container mt-4">
            <h1>Hola, {usuario?.nombre || usuario?.usuario}</h1>
            <p className="subtitle">Ya iniciaste sesión</p>

            <div className="mb-3">
                <Link to="/personajes" className="btn btn-info me-2">Ver personajes</Link>
                <Link to="/" className="btn btn-secondary">Inicio</Link>
            </div>

            <button className="btn btn-danger" onClick={salir}>
                Cerrar sesión
            </button>
        </div>
    );
}

export default Dashboard;