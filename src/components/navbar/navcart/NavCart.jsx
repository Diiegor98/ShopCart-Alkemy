import { Badge } from "@mui/material";

const NavCart = () => {
  return (
    <>
      <Badge badgeContent={0} color="error">
        <button
          className="btn btn-light position-relative"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#staticBackdrop"
          aria-controls="staticBackdrop"
        >
          <i className="bi bi-cart"></i>
        </button>
      </Badge>
      {/* Off Canvas */}
      <div
        className="offcanvas offcanvas-end"
        data-bs-backdrop="static"
        tabIndex="-1"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="staticBackdropLabel">
            Tus productos
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
            Tu carrito está vacío
        </div>
      </div>
    </>
  );
};

export default NavCart;
