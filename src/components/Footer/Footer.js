import React from "react";
import { Container, Jumbotron, Row, Col, Image } from "react-bootstrap";
import Logo from "../../assets/logo1.png";
import styles from "../../CSS/Footer.module.css";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";
import { GrMail } from "react-icons/gr";

function Footer() {
  return (
    <div className={styles.Footer}>
      <Jumbotron id="contact" className={styles.Jumbotron}>
        <Container className={styles.Container}>
        <hr className={styles.line1} />
          <Row className={styles.Top1}>
            <Col>
              <Image className={styles.Logo} src={Logo} alt="Logo" />
            </Col>
            <Col className={styles.Column}>
              <h5 className={styles.Border}> Links </h5>
              <p> Terms and Condition </p>
              <p> Privacy Policy </p>
            </Col>
            <hr className={styles.line2} />
            <Col className={styles.Column}>
              <h5 className={styles.Border}> Services </h5>
              <p> Hire Blue Collars </p>
              <p> Get Jobs </p>
            </Col>
            <hr className={styles.line2} />
            <Col className={styles.Column}>
              <h5 className={styles.Border}> Contact Us </h5>
              <Row>
                <Col md={10}>
                  <p>
                    <FaPhoneAlt /> 9876543210
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={10}>
                  <p>
                    <GrMail /> contact@sandhi.com
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className={styles.Top2}>
            <Col>
              <h5 style={{ textDecoration: "underline" }}> links </h5>
              <p> Terms and Condition </p>
              <p> Privacy Policy </p>
            </Col>
            <Col>
              <h5 style={{ textAlign: "end", textDecoration: "underline" }}>
                Services
              </h5>
              <p style={{ textAlign: "end" }}> Hire Blue Collars </p>
              <p style={{ textAlign: "end" }}> Get Jobs </p>
            </Col>
          </Row>
          <hr className={styles.line1} />
          <Row className={styles.Bottom1}>
            <Col>
              <p>
                <BiCopyright /> Sandhi 2021 | All rights reserved.
              </p>
            </Col>
            <Col className={styles.SocialLinks}>
              <a href="https://www.linkedin.com/" className={styles.Shift}>
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/" className={styles.Shift}>
                <FaInstagram />
              </a>
              <a href="https://twitter.com/" className={styles.Shift}>
                <FaTwitter />
              </a>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Footer;
