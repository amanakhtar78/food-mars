import React, { useState } from "react";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "lorem111 Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "lorem222 Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "lorem333 Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
];
const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission or API call here
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Checkout</h2>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Address:</label>
          <textarea
            value={address}
            onChange={handleAddressChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            style={styles.select}
          >
            <option value="">Select payment method</option>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button type="submit" style={styles.button}>
          Place Order
        </button>
      </form>
      <div className="d-flex">
        {featureData.map((item, index) => (
          <Col lg="4" md="6" sm="6" key={index} className="mt-5">
            <div className="feature__item text-center px-5 py-3">
              <img src={item.imgUrl} alt="feature-img" className="w-25 mb-3" />
              <h5 className="fw-bold">{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          </Col>
        ))}
      </div>
    </div>
  );
};

const styles = {
  form: {
    maxWidth: "400px",
    margin: "0 auto",
  },
  heading: {
    textAlign: "center",
    marginBottom: "1rem",
  },
  formGroup: {
    marginBottom: "1rem",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    fontSize: "1rem",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  select: {
    width: "100%",
    padding: "0.5rem",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    margin: "10px 0px",
    display: "block",
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#df2020",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Checkout;
