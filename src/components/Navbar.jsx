import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';
import React from 'react';

const Navbar=()=> {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
        <h1>Mercatek</h1>
      <Nav.Item>
        <Nav.Link href="/home">Cuenta</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Productos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
        <i class="bi bi-cart4"></i>Carrito
          <CartWidget />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;