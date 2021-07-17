import React from "react";
import styles from "../../CSS/Navbar.module.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";


function Header() {
  return (
    <Navbar fixed="top" bg="light" expand="lg" className={styles.NavBar}>
      <Navbar.Brand className={styles.Logo}>
        <a href="/" className={styles.Brand} style={{ fontSize: "35px" }}>
          <span style={{ color: "#f27900" }}>SA</span>
          <span style={{ color: "#a4c2f4" }}>ND</span>
          <span style={{ color: "#38761d" }}>HI</span>
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link active smooth={true} duration={1000} to="home">
            Home
          </Link>
          <Link smooth={true} offset={-90} duration={1000} to="categories">
            Categories
          </Link>
          <Link smooth={true} offset={-90} duration={1000} to="contact">
            Contact Us
          </Link>
        </Nav>
        <a href="/labour/register"> Register </a>
      </Navbar.Collapse>
      {/* <Navbar.Collapse id="basic-navbar-nav" className={styles.ShiftRight}>
        <Nav className="mr-auto">
          <NavDropdown
            title={<span className={styles.Title}>Opportunities</span>}
            id="dropdown-basic-button"
            className={styles.Dropdown}
          >
            <NavDropdown.Item href="/jobs/electrician">
              Electrician
            </NavDropdown.Item>
            <NavDropdown.Item href="/jobs/plumber">
              Plumber
            </NavDropdown.Item>
            <NavDropdown.Item href="/jobs/mechanic">
              Mechanic
            </NavDropdown.Item>
            <NavDropdown.Item href="/jobs/cooking">
              Cook
            </NavDropdown.Item>
            <NavDropdown.Item href="/jobs/peon">
              Peon
            </NavDropdown.Item>
            <NavDropdown.Item href="/jobs/driver">
              Driver
            </NavDropdown.Item>
            <NavDropdown.Item href="/jobs/housekeeping">
              House Keeping
            </NavDropdown.Item>
            <NavDropdown.Item href="/jobs/siteworkers">
              Construction Site Worker
            </NavDropdown.Item>
            <NavDropdown.Item href="/jobs/securityguard">
              Security Guard
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse> */}
    </Navbar>
  );
}

export default Header;
