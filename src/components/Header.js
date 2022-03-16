import React from "react";
import { Container, Navbar } from "react-bootstrap";

export function Header(params) {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">
          <img
            src="/assets/images/logo.png"
            width={30}
            height={30}
            className="d-inline-block align-top"
            alt="Brand Lgo"
          />{" "}
          <strong>
            EGA<span style={{ color: "red" }}>TOR</span>
          </strong>
        </Navbar.Brand>
      </Navbar>
    </>
  );
}
