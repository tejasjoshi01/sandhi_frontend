import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import styles from "../../CSS/Candidate.module.css";


function JobCard(props) {
  const { item } = props;


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
              alt={item.company}
              className={styles.CardImage}
            />
            <Col>
              <h1 className={styles.Title}>{item.employer_full_name }</h1>
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
                    Job Location :
                  </h5>
                  <h5 className={styles.Value}>{item.location}</h5>
                </Row>
              </Col>

            </Row>


            <Row>
              <Col md={0} lg={12}>
                <a href='#' className={styles.shiftRight}>
                  <button
                    className={styles.Button}
                    data-active={"Contact"}
                    data-hover={item.employer_contact}
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

export default JobCard ; 
