import React from "react";
import styles from "../../CSS/Banner.module.css";
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap";
import BannerImage from "../../assets/banner2.png";


function Banner(){
  return (
    <Jumbotron id="home" className={styles.Jumbotron} fluid>
      <Container className={styles.Container}>
        <Row>
          <Col md={6} lg={6} className={styles.leftCol}>
            <h1 className={styles.Heading}>
               <span style={{ color: "#f27900" }}>SA</span>
               <span style={{ color: "#a4c2f4" }}>ND</span>
               <span style={{ color: "#38761d" }}>HI</span>
            </h1>
            <div className={styles.Rectangle} />
            <h2 className={styles.TagLineSanskrit}>
              श्रमेण लभ्यं सकलं 
              <br></br>
              न श्रमेण विना क्वचित् ।
              <br></br>
            </h2>
            <Row>
              <Col>
                <p className={styles.SubHeading}>Employer</p>
                <p style={{ textAlign: "justify" }}>
                  <a href="#categories">See available candidates</a>
                  or <a href="/jobs/post">Post New Job</a>
                  if you don't find any
                  suitable candidates
                </p>
              </Col>
              <Col>
                <p className={styles.SubHeading}>Job Seeker</p>
                <p style={{ textAlign: "justify" }}>
                  <a href="/user/register">Register</a>
                  your profile and get hired or manually
                  <a href="#categories"> apply</a> to jobs.
                </p>
              </Col>
            </Row>

            <a href="#categories">
              <button className={styles.Button}>Explore</button>
            </a>
          </Col>
          <Col md={6} lg={6} className={styles.rightCol}>
            <Image
              className={styles.BannerImage}
              src={BannerImage}
              alt="BannerImage"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Banner ; 
