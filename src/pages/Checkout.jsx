import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/checkout__form.css";
const Checkout = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmt = totalAmount + Number(shippingCost);
  return (
    <Helmet title="Checkout">
      <CommonSection title="checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <h5 className="mb-4">Shipping address</h5>

              <h6>Enter your name</h6>
              <form className="checkout__form">
                <div className="form__group">
                  <input type="text" placeholder="Enter your name" />
                </div>
                <h6>Enter your email</h6>
                <div className="form__group">
                  <input type="email" placeholder="Example@email" />
                </div>
                <h6>Enter Phone number</h6>
                <div className="form__group">
                  <input type="number" placeholder="0000 0000 0000" />
                </div>
                <h6>Enter country name</h6>
                <div className="form__group">
                  <input type="text" placeholder="country" />
                </div>
                <h6>Enter city name</h6>
                <div className="form__group">
                  <input type="text" placeholder="Enter city name" />
                </div>
                <h6>Enter Postal code</h6>
                <div className="form__group">
                  <input type="number" placeholder="Postal code" />
                </div>
              </form>
            </Col>
            <Col lg="4" md="6">
              <div className="pd-50 ">
                <h6>
                  Subtotal : $ <span>{totalAmount}</span>
                </h6>
                <h6>
                  Shipping: $ <span>{shippingCost}</span>
                </h6>

                <h6>
                  Total: $ <span>{totalAmt}</span>
                </h6>
                <h6>
                  <button className="addToCart">Payment</button>
                </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
