import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category";
import "../styles/home.css";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";
import products from "../assets/fake-data/products";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import ProductCard from "../components/UI/product-card/ProductCard";
import whyImg from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider";
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
const AllFoods = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);
  useEffect(() => {
    const filteredPizza = products.filter((item) => item, category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);
  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);
  return (
    <Helmet title="home">
      <section className="pt-0">
        <Category />
      </section>

      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2>Popular Foods</h2>
          </Col>
          <Col lg="12">
            <div className="food__category d-flex align-items-center justify-content-center gap-4">
              <button
                className={`all__btn ${
                  category === "ALL" ? "foodBtnActive" : ""
                } `}
                onClick={() => setCategory("ALL")}
              >
                All
              </button>
              <button
                className={`d-flex align-item-center gap-2  ${
                  category === "BURGER" ? "foodBtnActive" : ""
                }`}
                onClick={() => setCategory("BURGER")}
              >
                <img src={foodCategoryImg01} alt="" />
                Burger
              </button>
              <button
                className={`d-flex align-item-center gap-2  ${
                  category === "PIZZA" ? "foodBtnActive" : ""
                }`}
                onClick={() => setCategory("PIZZA")}
              >
                <img src={foodCategoryImg02} alt="" />
                Pizza
              </button>
              <button
                className={`d-flex align-item-center gap-2  ${
                  category === "BREAD" ? "foodBtnActive" : ""
                }`}
                onClick={() => setCategory("BREAD")}
              >
                <img src={foodCategoryImg03} alt="" />
                Bread
              </button>
            </div>
          </Col>
          {allProducts.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </Helmet>
  );
};

export default AllFoods;
