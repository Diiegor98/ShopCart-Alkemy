import { useState } from "react";

const Pay = () => {

  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [error, setError] = useState(false);
  const [confirmpay, setConfirmpay] = useState(false);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleDireccionChange = (event) => {
    setDireccion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    nombre.length > 0 && direccion.length > 0 ? setConfirmpay(true) : setError(true);
  };

  return (

    confirmpay ?
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">Compra exitosa</h4>
        <p>Tu compra se realizó con éxito. Muchas gracias</p>
      </div>
      : <form className="d-flex flex-column justify-content-center align-items-center pt-2" onSubmit={handleSubmit}>
        <h3>Ingresa tus datos</h3>
        <div className="form-floating input-group-sm mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Nombre completo"
            onChange={handleNombreChange}
          />
          <label htmlFor="floatingInput">Nombre completo</label>
        </div>
        <div className="form-floating input-group-sm mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Direccion"
            onChange={handleDireccionChange}
          />
          <label htmlFor="floatingInput">Direccion</label>
        </div>
        <button className="btn btn-primary">Confirmar compra</button>
        {error ? (
          <span className="pt-2 errores">
            Complete los datos.
          </span>
        ) : null}
      </form>

  );
};

export default Pay;
