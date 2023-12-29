const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://img.freepik.com/foto-gratis/concepto-compras-primer-plano-retrato-joven-hermosa-atractiva-chica-pelirroja-sonriendo-mirando-camara_1258-119094.jpg?w=826&t=st=1703836378~exp=1703836978~hmac=ffcb7e82da4cf9a47283e13b3ce51213145fb4ee1dbbe9c3516ab2b1b1ceac44" className="d-block w-100" alt="banner1" />
        </div>
        <div className="carousel-item ">
          <img src="https://img.freepik.com/foto-gratis/concepto-compras-primer-plano-retrato-joven-hermosa-atractiva-chica-pelirroja-sonriendo-mirando-camara_1258-124943.jpg?w=826&t=st=1703836421~exp=1703837021~hmac=57ade9b5ede07644f72c760dd9e84da233ac5a473153033585c9d64dd318693c" className="d-block w-100" alt="banner2" />
        </div>
        <div className="carousel-item">
          <img src="https://img.freepik.com/foto-gratis/concepto-compras-primer-plano-retrato-joven-hermosa-atractiva-chica-pelirroja-sonriendo-mirando-camara_1258-118763.jpg?w=826&t=st=1703836435~exp=1703837035~hmac=180aa0fd8dc2c616b014711445cb667816c942e677e752252be1c45c8ce0c564" className="d-block w-100" alt="banner3" />
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
