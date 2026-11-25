import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="home">
      <h1>404</h1>
      <p className="subtitle">La página que buscas no existe</p>
      <div className="home-links">
        <Link to="/">Volver al inicio</Link>
      </div>
    </div>
  );
}

export default Error;