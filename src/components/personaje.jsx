const colorEstado = {
  Alive: "#22c55e",
  Dead: "#ef4444",
  unknown: "#9ca3af",
};

function Personaje({ name, species, gender, image, status }) {
  return (
    <div className="personaje">
      <div className="personaje-foto">
        <img src={image} alt={name} loading="lazy" />
        <span
          className="personaje-estado"
          style={{ background: colorEstado[status] ?? colorEstado.unknown }}
        >
          {status}
        </span>
      </div>
      <div className="personaje-info">
        <h2>{name}</h2>
        <span className="personaje-especie">{species}</span>
        <p>{gender}</p>
      </div>
    </div>
  );
}

export default Personaje;