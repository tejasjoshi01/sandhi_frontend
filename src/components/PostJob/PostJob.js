import { Navbar} from "react-bootstrap";
import styles from "../../CSS/Navbar.module.css";
import PostJobForm from "./PostJobForm.js";


function PostJob() {
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

     <PostJobForm/>
    </div>
  );
}

export default PostJob;
