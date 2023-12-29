import CartItem from "./CartItem";
import { useContext } from "react";
import CartContext from "../../../contexts/CartContext";

const CartContent = ({ showpay }) => {
  const { cart, clearCart } = useContext(CartContext);

  console.log(cart)

  return (
    <>
      {cart.map((product) => {
        return (
          <CartItem
            title={product.title}
            key={product.id}
            price={product.price}
            category={product.category}
            image={product.image}
          />
        );
      })}
      <button onClick={clearCart} className="btn btn-danger mb-2">Limpiar carrito</button>
      <button onClick={() => showpay(false)} className="btn btn-primary">Confirmar compra</button>
    </>
  )
};

export default CartContent;

