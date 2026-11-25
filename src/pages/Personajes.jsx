import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Personaje from "../components/personaje";

const ESPECIES = [
  "Human", "Alien", "Humanoid", "Robot", "Animal", "Cronenberg",
  "Mythological Creature", "Disease", "Poopybutthole", "unknown",
];

function Personajes() {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [especie, setEspecie] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/1")
      .then((respuesta) => {
        if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`);
        return respuesta.json();
      })
      .then((personaje) => setDatos([personaje]))
      .catch((e) => setError(e.message))
      .finally(() => setCargando(false));
  }, []);

  const filtrados = datos.filter((p) => {
    const texto = busqueda.toLowerCase();
    const coincideBusqueda = [p.name, p.species, p.gender, p.status].some(
      (campo) => campo.toLowerCase().includes(texto)
    );
    const coincideEspecie = especie === "" || p.species === especie;
    return coincideBusqueda && coincideEspecie;
  });

  return (
    <div className="personajes-page">
      <nav className="personajes-nav">
        <Link to="/dashboard">← Volver al dashboard</Link>
        <Link to="/">Inicio</Link>
      </nav>
      <h1>Rick and Morty</h1>

      <div className="filtros">
        <input
          className="filtro-input"
          type="text"
          placeholder="Buscar por nombre, especie, género o estado"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <select
          className="filtro-input"
          value={especie}
          onChange={(e) => setEspecie(e.target.value)}
        >
          <option value="">Todas las especies</option>
          {ESPECIES.map((esp) => (
            <option key={esp} value={esp}>
              {esp}
            </option>
          ))}
        </select>
      </div>

      {cargando && <p className="subtitle">Cargando personajes...</p>}
      {error && <p className="error">{error}</p>}

      {!cargando && !error && filtrados.length === 0 && (
        <p className="subtitle">No se encontraron personajes.</p>
      )}

      <div className="personajes-grid">
        {filtrados.map((p) => (
          <Personaje key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}

export default Personajes;