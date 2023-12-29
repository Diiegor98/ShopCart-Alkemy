import { useContext } from "react";
import CartContext from "../contexts/CartContext";



const AddButton = ({ producto }) => {

  const { addToCart } = useContext(CartContext);

  return (

    <button
      onClick={() => { addToCart(producto) }}
      type="button"
      className="btn btn-primary"
    >
      <i className="bi bi-cart-plus"></i>
    </button>

  );
};

export default AddButton;


