import React from "react";
import { Button } from "react-bootstrap";
import styles from "../../CSS/Candidate.module.css";

function Header(props) {
  return (
    <div>
      <div className={styles.Background}>
        <div className={styles.Opportunity}>
          <h1 className={styles.TitleShadowed}> {props.title} </h1>
          <a href="/jobs/register">
            <Button className={styles.Button}>Post an Opening</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;



