import React from "react";
import { Link } from "react-router-dom";

import { MdChat } from "react-icons/md";

import { Container, Form } from "./styles";

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <MdChat size={36} color="#0e9abf"></MdChat>
      </Link>
      <Form>
        <div>
          <input type="text" />
          <input type="password" />
          <button type="button">Log in</button>
          <button type="button">Sign up</button>
        </div>
      </Form>
    </Container>
  );
}
