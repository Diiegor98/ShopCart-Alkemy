const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://img.freepik.com/vector-gratis/banner-carrito-compras-venta-viernes-negro-espacio-texto_1017-28049.jpg?w=826&t=st=1703836196~exp=1703836796~hmac=1f5265b7b10a106cd8f65307daf3284e0a9a234a73f72b52fd486410d72b753d" className="d-block w-100" alt="banner1" />
        </div>
        <div className="carousel-item ">
          <img src="https://img.freepik.com/vector-gratis/banner-rebajas-viernes-negro-color-amarillo-brillante_1017-34719.jpg?w=826&t=st=1703836207~exp=1703836807~hmac=451b30cfe2cc074b05bd9fab39c3c485592fbefc1aaaee699fb8f888ea5fd444" className="d-block w-100" alt="banner2" />
        </div>
        <div className="carousel-item">
          <img src="https://img.freepik.com/vector-gratis/banner-descuento-carrito-compras-amarillo-bolsas-regalo-negras-estilo-realista-ilustracion-vectorial_548887-102.jpg?w=826&t=st=1703836229~exp=1703836829~hmac=48c19667d9c18d0b15596a2a7cfbb747d61181ea4841a3f5b8967e1fdb7e7b48" className="d-block w-100" alt="banner3" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
