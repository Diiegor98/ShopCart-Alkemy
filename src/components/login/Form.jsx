import "./form.css";
import { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";

const Form = ({ login }) => {
  const [name, setName] = useContext(UserContext);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    password.length > 3 && name.length > 3 ? login(true) : setError(true);
  };

  return (
    <div className="form-box">
      <form className="form" onSubmit={handleSubmit}>
        <span className="title">
          ShopCart| DR{" "}
          <img src="../../public/navbar-logo.png" alt="Logo carro" />
        </span>
        <span className="subtitle">Iniciá sesión para ver los productos.</span>
        {error ? (
          <span className="errores">
            El nombre y la contraseña deben ser mayor a 3 caracteres.
          </span>
        ) : null}
        <div className="form-container">
          <input
            onChange={handleNameChange}
            type="text"
            className="input"
            placeholder="Nombre"
          />
          <input
            onChange={handlePasswordChange}
            type="password"
            className="input"
            placeholder="Password"
          />
        </div>
        <button>Ingresar</button>
        <span className="description">
          *Para ingresar solo debe introducir su nombre y una contraseña
          aleatoria mayor a 3 caracteres.
        </span>
      </form>
    </div>
  );
};

export default Form;
