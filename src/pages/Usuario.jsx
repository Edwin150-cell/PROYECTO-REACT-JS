import { useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import Contexto from "../context/Contexto";

const Usuario = () => {
    const { nombre } = useParams();
    const { usuario } = useContext(Contexto);

    return (
        <div className="container mt-4">
            <h1>Perfil de Usuario</h1>
            <p>Parámetro en URL: <strong>{nombre}</strong></p>
            <p>Usuario en sesión: <strong>{usuario?.usuario || usuario?.nombre}</strong></p>
            <NavLink to="/" className="btn btn-primary">Volver a Home</NavLink>
        </div>
    );
};

export default Usuario;