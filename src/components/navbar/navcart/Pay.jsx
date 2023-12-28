const Pay = () => {
  
    return (
    <form className="d-flex flex-column justify-content-center align-items-center pt-2">
      <h3>Ingresa tus datos</h3>
      <div className="form-floating input-group-sm mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Nombre completo"
          required
        />
        <label htmlFor="floatingInput">Nombre completo</label>
      </div>
      <div className="form-floating input-group-sm mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Direccion"
          required
        />
        <label htmlFor="floatingInput">Direccion</label>
      </div>
      <button onClick={()=>alert('Compra realizada')} className="btn btn-primary">Confirmar compra</button>
    </form>
  );
};

export default Pay;
