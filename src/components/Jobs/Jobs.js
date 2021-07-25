import axios from "axios";
import React, { useState, useEffect } from "react";
import JobCard from "./JobCard.js";
import { Navbar } from "react-bootstrap";
import Header from "./Header.js";
import styles from "../../CSS/Candidate.module.css";
import { Container, Jumbotron, Spinner } from "react-bootstrap";

function Jobs(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/jobs/${props.category}`).then(
      (res) => {
        // data = res.data.results;
        console.log(res.data.results);
        setData(res.data.results);
        console.log(data);
      },
      (error) => {
        console.log(error);
        alert(error);
      }
    );
  }, [props.category, data]);

  if (data.length === 0 || !data) {
    return (
      <div>
        <Navbar fixed="top" bg="light" expand="lg" className={styles.NavBar}>
          <Navbar.Brand className={styles.Logo}>
            <a href="/" className={styles.Brand} style={{ fontSize: "35px" }}>
              <span style={{ color: "#f27900" }}>SA</span>
              <span style={{ color: "#a4c2f4" }}>ND</span>
              <span style={{ color: "#38761d" }}>HI</span>
            </a>
          </Navbar.Brand>
        </Navbar>

        <Header title={props.category} />
        <h3
          style={{
            textAlign: "center",
            marginTop: "220px",
            marginBottom: "200px",
          }}
        >
          <Spinner animation="border" className={styles.Spinner} />
          <br></br>No Candidates are available.
        </h3>
      </div>
    );
  }

  return (
    <div>
      <Navbar fixed="top" bg="light" expand="lg" className={styles.NavBar}>
        <Navbar.Brand className={styles.Logo}>
          <a href="/" className={styles.Brand} style={{ fontSize: "35px" }}>
            <span style={{ color: "#f27900" }}>SA</span>
            <span style={{ color: "#a4c2f4" }}>ND</span>
            <span style={{ color: "#38761d" }}>HI</span>
          </a>
        </Navbar.Brand>
      </Navbar>
      <Header title={props.category} />
      <div>
        <Jumbotron style={{ backgroundColor: "white" }}>
          <Container className={styles.Cards}>
            {data.map((item) => {
              return <JobCard item={item} />;
            })}
          </Container>
        </Jumbotron>
      </div>
    </div>
  );
}

export default Jobs;