// import KnowAboutCard from "./KnowAboutCard";
// import KnowAboutData from "./KnowAboutData";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import styles from "../../CSS/KnowAbout.module.css";
import { Card } from "react-bootstrap";

// import all logos 
import electrician from '../../assets/electrician.png' ; 
import plumber from '../../assets/plumber.png' ; 
import mechanic from '../../assets/mechanic.png' ; 
import cook from '../../assets/cook.png' ; 
import peon from '../../assets/peon.png' ; 
import driver from '../../assets/driver.png' ; 
import maid from '../../assets/maid.png' ; 
import site from '../../assets/site.png' ; 
import security from '../../assets/security.png' ; 

function Categories() {
  return (
    <Jumbotron className={styles.Jumbotron}>
      <Container fluid="sm">
        <h2 id="categories" className={styles.Heading}>
          Categories
        </h2>
        <Row
          className="justify-content-md-center"
          style={{ marginTop: "50px" }}
        >
          {/* {KnowAboutData} */}
          <Col id="knowAbout" className={styles.Box}>
            <Card style={{ width: "13rem", borderRadius: "20px" }}>
              <Card.Img
                variant="top"
                src={electrician}
                alt="Image"
                className={styles.CardImage}
              />
              <Card.Body>
                <div className={styles.Title}>
                  <Card.Title className={styles.CardTitle}>
                    Electrician
                  </Card.Title>
                </div>
                <a href="/jobs/electrician" className={styles.Links}>
                  View Jobs
                </a>
                <br />
                <a href="candidates/electrician" className={styles.Links}>
                  View Candidates
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col id="knowAbout" className={styles.Box}>
            <Card style={{ width: "13rem", borderRadius: "20px" }}>
              <Card.Img
                variant="top"
                src={plumber}
                alt="Image"
                className={styles.CardImage}
              />
              <Card.Body>
                <div className={styles.Title}>
                  <Card.Title className={styles.CardTitle}>Plumber</Card.Title>
                </div>
                <a href="/jobs/plumber" className={styles.Links}>
                  View Jobs
                </a>
                <br />
                <a href="candidates/plumber" className={styles.Links}>
                  View Candidates
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col id="knowAbout" className={styles.Box}>
            <Card style={{ width: "13rem", borderRadius: "20px" }}>
              <Card.Img
                variant="top"
                src={mechanic}
                alt="Image"
                className={styles.CardImage}
              />
              <Card.Body>
                <div className={styles.Title}>
                  <Card.Title className={styles.CardTitle}>Mechanic</Card.Title>
                </div>
                <a href="/jobs/mechanic" className={styles.Links}>
                  View Jobs
                </a>
                <br />
                <a href="candidates/mechanic" className={styles.Links}>
                  View Candidates
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row
          className="justify-content-md-center"
          style={{ marginTop: "50px" }}
        >
          <Col id="knowAbout" className={styles.Box}>
            <Card style={{ width: "13rem", borderRadius: "20px" }}>
              <Card.Img
                variant="top"
                src={cook}
                alt="Image"
                className={styles.CardImage}
              />
              <Card.Body>
                <div className={styles.Title}>
                  <Card.Title className={styles.CardTitle}>Cook</Card.Title>
                </div>
                <a href="/jobs/cooking" className={styles.Links}>
                  View Jobs
                </a>
                <br />
                <a href="candidates/cooking" className={styles.Links}>
                  View Candidates
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col id="knowAbout" className={styles.Box}>
            <Card style={{ width: "13rem", borderRadius: "20px" }}>
              <Card.Img
                variant="top"
                src={peon}
                alt="Image"
                className={styles.CardImage}
              />
              <Card.Body>
                <div className={styles.Title}>
                  <Card.Title className={styles.CardTitle}>Peon</Card.Title>
                </div>
                <a href="/jobs/peon" className={styles.Links}>
                  View Jobs
                </a>
                <br />
                <a href="candidates/peon" className={styles.Links}>
                  View Candidates
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col id="knowAbout" className={styles.Box}>
            <Card style={{ width: "13rem", borderRadius: "20px" }}>
              <Card.Img
                variant="top"
                src={driver}
                alt="Image"
                className={styles.CardImage}
              />
              <Card.Body>
                <div className={styles.Title}>
                  <Card.Title className={styles.CardTitle}>Driver</Card.Title>
                </div>
                <a href="/jobs/driver" className={styles.Links}>
                  View Jobs
                </a>
                <br />
                <a href="candidates/driver" className={styles.Links}>
                  View Candidates
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row
          className="justify-content-md-center"
          style={{ marginTop: "50px" }}
        >
          <Col id="knowAbout" className={styles.Box}>
            <Card style={{ width: "13rem", borderRadius: "20px" }}>
              <Card.Img
                variant="top"
                src={maid}
                alt="Image"
                className={styles.CardImage}
              />
              <Card.Body>
                <div className={styles.Title}>
                  <Card.Title className={styles.CardTitle}>
                    House Keeping
                  </Card.Title>
                </div>
                <a href="/jobs/housekeeping" className={styles.Links}>
                  View Jobs
                </a>
                <br />
                <a href="/candidates/housekeeping" className={styles.Links}>
                  View Candidates
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col id="knowAbout" className={styles.Box}>
            <Card style={{ width: "13rem", borderRadius: "20px" }}>
              <Card.Img
                variant="top"
                src={site}
                alt="Image"
                className={styles.CardImage}
              />
              <Card.Body>
                <div className={styles.Title}>
                  <Card.Title className={styles.CardTitle}>
                    Construction Site Workers
                  </Card.Title>
                </div>
                <a href="/jobs/siteworkers" className={styles.Links}>
                  View Jobs
                </a>
                <br />
                <a href="candidates/siteworkers" className={styles.Links}>
                  View Candidates
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col id="knowAbout" className={styles.Box}>
            <Card style={{ width: "13rem", borderRadius: "20px" }}>
              <Card.Img
                variant="top"
                src={security}
                alt="Image"
                className={styles.CardImage}
              />
              <Card.Body>
                <div className={styles.Title}>
                  <Card.Title className={styles.CardTitle}>
                    Security Guard
                  </Card.Title>
                </div>
                <a href="/jobs/securityguard" className={styles.Links}>
                  View Jobs
                </a>
                <br />
                <a href="candidates/securityguard" className={styles.Links}>
                  View Candidates
                </a>
              </Card.Body>
            </Card>
          </Col>{" "}
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Categories;
