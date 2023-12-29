import "./footer.css";

const Footer = () => {
  return (
    <div className="footer d-flex flex-column justify-content-center align-items-center">
      <p className="seccion-texto">¡Trabajemos juntos!</p>
      <p className="seccion-texto">
        <i className="bi bi-geo-alt"></i> Santa Fe, Argentina.
      </p>
      <div className="contact-icons">
        <a href="mailto:diiegor98@gmail.com">
          <i className="bi bi-envelope-fill"></i>
        </a>
        <a
          href="https://github.com/Diiegor98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/diiegorodriguez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://diegorodriguez.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-person-circle"></i>
        </a>
      </div>
      <div className="derechos-de-autor">Creado por Diego Rodriguez &#169;</div>
    </div>
  );
};

export default Footer;
