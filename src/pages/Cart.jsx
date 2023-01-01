import React from "react";
import { Link } from "react-router-dom";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import CartItem from "../components/UI/cart/Cartitem";

import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import "../styles/shopping-cart-front.css";
//"../styles/shopping-cart.css";

import "../styles/cart-pages.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">your cart is empty</h5>
              ) : (
                /* <table className="table table table-bordered">
                  <thead>
                    <th>image </th>
                    <th>Product title</th>
                    <th>price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </thead>
                  <tbody>
                  
                    <Tr />
                  </tbody>
                </table> */
                cartProducts.map((item, index) => (
                  <CartItem item={item} key={index} />
                ))
              )}
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        {" "}
        <div className="cart__botto d-flex align-item-bottom justify-content-between">
          <h6>
            Subtotal amount: <span>${totalAmount}</span>
          </h6>
          <button>
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { image01, title, price, quantity } = props.item;
  return (
    <tr>
      <td className="text-center">{image01}</td>
      <td className="text-center">{title}</td>
      <td className="text-center">{price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center">
        <i class="ri-delete-bin-line"></i>
      </td>
    </tr>
  );
};

export default Cart;
