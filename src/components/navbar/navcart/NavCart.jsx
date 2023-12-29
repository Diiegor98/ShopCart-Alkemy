import CartContent from "./cartcontent/CartContent";
import { useContext } from "react";
import { useState } from "react";
import { Badge } from "@mui/material";
import CartContext from "../../contexts/CartContext";
import Pay from "./Pay";

const NavCart = () => {

  const [showpay, setShowpay] = useState(true);
  const { cart } = useContext(CartContext);

  return (
    <>
      <Badge badgeContent={cart.length} color="error">
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
        <div className="offcanvas-body d-flex flex-column">
          {showpay ? <CartContent showpay={setShowpay} /> : <Pay />}
        </div>
      </div>
    </>
  );
};

export default NavCart;
