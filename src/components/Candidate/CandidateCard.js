import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import styles from "../../CSS/Candidate.module.css";


function CandidateCard(props) {
  const { item } = props;

//   aadhar_number: 9090909090
//   address_line_1: "White House"
//   address_line_2: "Khamala Chachi ki god me"
//   age: 99
//   contact_number: 9090909088
//   current_location: "banglore"
//   date_of_birth: "2021-07-30"
//   first_name: "Joe"
//   id: 16
//   last_name: "Biden"
//   message: "Chini is what i love"
//   pincode: 696969
//   skill: "SECURITY GUARD"
//   state: "Texas"



  return (
    <div id="fulltime" className={styles.Box}>
      <Card style={{ width: "80rem", borderRadius: "10px" }}>
        <Card.Header
          style={{ backgroundColor: "#008dc8", borderRadius: "10px 10px 0 0" }}
        ></Card.Header>
        <Card.Body>
          <Row>
            <Card.Img
              variant="top"
              src="https://ui-avatars.com/api/?background=bd6997&color=fff&name=Roz+Gaar&font-size=0.5&rounded=true"
              // src = {item.image}
              alt={item.company}
              className={styles.CardImage}
            />
            <Col>
              <h1 className={styles.Title}>{item.first_name + " " + item.last_name  }</h1>
            </Col>
          </Row>
          <Row>
            <p className={styles.Description}>{item.message}</p>
          </Row>
          <Container>
            <Row>
              <Col md={6} lg={6}>
                <Row>
                  <h5 className={styles.Heading} style={{ marginLeft: "20px" }}>
                    Current Location :
                  </h5>
                  <h5 className={styles.Value}>{item.current_location}</h5>
                </Row>
              </Col>

            </Row>
            <Row>
              <Col md={12} lg={12}>
                <Row>
                  <Container>
                    <h5
                      className={styles.Heading}
                      style={{ marginLeft: "4px" }}
                    >
                      Year of Experience :
                      <span className={styles.Value}>{item.age}</span>
                    </h5>
                  </Container>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col md={0} lg={12}>
                <a href='#' className={styles.shiftRight}>
                  <button
                    className={styles.Button}
                    data-active={"Hire Me"}
                    data-hover={item.contact_number}
                  />
                </a>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CandidateCard ;
