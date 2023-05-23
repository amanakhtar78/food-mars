import React from "react";

import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CartItem from "../components/UI/cart/Cartitem";

import { useDispatch, useSelector } from "react-redux";

import { cartUiActions } from "../store/shopping-cart/cartUiSlice";
import "../styles/shopping-cart.css";
const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  return (
    <div className="">
      <ListGroup className="">
        <div className="">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">No item added to cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>
        <div className="cart_bottom d-flex align-item-center justify-content-between">
          <h6>
            Subtotal amount: <span> {totalAmount} kes</span>
          </h6>
          <button>
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Cart;
