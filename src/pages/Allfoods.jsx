import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import data from "../pages/Home";
import "../styles/all-foods.css";
import Axios from "axios";
const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productData, setProductData] = useState(products);

  const [data, setData] = useState([]);
  function getData() {
    Axios.get("http://localhost:3001/gtd").then((response) => {
      setData(response.data.recordset);
    });
  }
  useEffect(getData, []);
  return (
    <Helmet title="All-Foods">
      <CommonSection title="All foods" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="search__widget d-flex align-items-center justify-content-between w-50 p-7px">
                <input
                  type="text"
                  placeholder="Search food..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="6" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="decending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>
            {data.map((item) => (
              <Col
                lg="4"
                md="4"
                sm="6"
                xs="6"
                key={item.OM_ITEM_CODE}
                className="mt-5"
              >
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
