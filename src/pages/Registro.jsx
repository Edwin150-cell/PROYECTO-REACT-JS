import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Registro = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navegacion = useNavigate();

    const validacion = {
        nombre: {
            required: "El campo nombre es requerido!"
        },
        usuario: {
            required: "El campo usuario es requerido!"
        },
        password: {
            required: "El campo contraseña es requerido!"
        }
    };

    const onSubmit = (data) => {
        Swal.fire({
            icon: "success",
            title: "Registro correcto!",
            text: `Usuario ${data.usuario} listo para iniciar sesión`
        });
        navegacion("/login", { replace: true });
    };

    return (
        <div className="container mt-4">
            <form onSubmit={handleSubmit(onSubmit)} className="row justify-content-center">
                <div className="col-md-5">
                    {errors.nombre && <p>{errors.nombre.message}</p>}
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        {...register("nombre", validacion.nombre)}
                        type="text"
                        className="form-control mb-3"
                        placeholder="nombre"
                    />

                    {errors.usuario && <p>{errors.usuario.message}</p>}
                    <label htmlFor="usuario">Usuario</label>
                    <input
                        {...register("usuario", validacion.usuario)}
                        type="text"
                        className="form-control mb-3"
                        placeholder="usuario"
                    />

                    {errors.password && <p>{errors.password.message}</p>}
                    <label htmlFor="password">Password</label>
                    <input
                        {...register("password", validacion.password)}
                        type="password"
                        className="form-control mb-3"
                        placeholder="password"
                    />

                    <button type="submit" className="btn btn-primary mb-3 w-100">Registrarse</button>
                    <NavLink to="/login" className="btn btn-secondary mb-3 w-100">Iniciar Sesion</NavLink>
                </div>
            </form>
        </div>
    );
};

export default Registro;