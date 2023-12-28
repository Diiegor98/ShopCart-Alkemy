import CartItem from "./CartItem";
import { useContext } from "react";
import CartContext from "../../../contexts/CartContext";

const CartContent = () => {
  const { cart } = useContext(CartContext);

  return cart.map((product) => {
    return (
        <CartItem
          title={product.title}
          key={product.id}
          price={product.price}
          category={product.category}
          image={product.image}
        />
    );
  });
};

export default CartContent;
