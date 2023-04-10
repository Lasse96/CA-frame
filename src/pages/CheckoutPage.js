import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeLast, success } from "../state/checkout/checkoutSlice";
import { Link } from "react-router-dom";
import "../styles/main.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(cart);

  return (
    <div>
      <h1>Cart Total: {cart.total}</h1>
      <button
        class="add"
        onClick={() => {
          dispatch(removeLast());
        }}
      >
        Remove Latest
      </button>
      <button
        class="add"
        onClick={() => {
          dispatch(success());
        }}
      >
        <Link to="/checkoutsuccesspage">Checkout</Link>
      </button>
      <ul>
        {cart.items.map((item, idx) => {
          console.log(cart.items);
          return (
            <>
              <li key={idx}>
                {item.name} $ {item.price}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
