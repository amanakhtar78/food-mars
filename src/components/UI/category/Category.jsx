import React, { useEffect, useState } from "react";
import Axios from 'axios'

import { Container, Row, Col } from "reactstrap";
import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";
import "../../../styles/category.css";

const categoryData = [
  {
    display: "FastFood",
    imgUrl: categoryImg01,
  },
  {
    display: "Pizza",
    imgUrl: categoryImg02,
  },
  {
    display: "Asian Food",
    imgUrl: categoryImg03,
  },
  {
    display: "Row Meat",
    imgUrl: categoryImg04,
  },
];
const Category = () => {
  const [cat, setCat] = useState([])
  function getData(){
    Axios.get('http://localhost:3001/gtc').then((response)=>{
      setCat(response.data.recordset)
    })
  }
useEffect(getData, [])

  return (
    <Container>
      <Row>
        {cat.map((item) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-3">
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                
              </div>
              <h6>{item.OM_ITEM_CATEGORY}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
