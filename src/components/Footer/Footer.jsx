import React, { useState } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

import "../../styles/footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date());

  console.log(currentYear.getFullYear());
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Treat Yourself</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                maxime modi repellendus dolorem eum dolorum
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span> Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span> friday - saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <p>Exp place1, loc test, 54545</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span> Phone:0123456789</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span> Email: example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">NewsLetters</h5>
            <p>Subscribe our newsLetter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - {currentYear?.getFullYear()}, website made by
              marstech. All Rights reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-item-center gap-4 justify-content-end">
              <p className="m-0">Follow:</p>
              <span>
                <Link to="">
                  <i class="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link to="">
                  <i class="ri-github-line"></i>
                </Link>
              </span>
              <span>
                <Link to="">
                  <i class="ri-youtube-line"></i>{" "}
                </Link>
              </span>
              <span>
                <Link to="">
                  <i class="ri-linkedin-box-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
      .
    </footer>
  );
};

export default Footer;
