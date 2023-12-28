import { useState } from "react";
import "./cartitem.css";

const CartItem = ({ title, price, image, category }) => {
  
  const [count, setCount] = useState(1);

  const sumar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item">
      <img src={image} alt={title} />
      <div className="i-description">
        <span className="i-title">{title}</span>
        <span className="i-category">{category}</span>
      </div>

      <div className="div-count">
        <button className="i-btn sumar" onClick={sumar}>
          +
        </button>
        <span className="counter">{count}</span>
        <button className="i-btn restar" onClick={restar}>
          -
        </button>
      </div>
      <span className="i-price">${(price * count).toFixed(2)}</span>
    </div>
  );
};



export default CartItem;
