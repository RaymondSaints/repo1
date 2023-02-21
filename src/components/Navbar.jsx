import React from 'react';
import CartWidget from './CartWidget';
import { NavLink, Link } from 'react-router-dom';

const Navbar=()=> {
  return (
      <ul className="nav nav-tabs">
       <Link className="text-decoration-none text-dark " to={"/"}><h1>Mercatek</h1></Link>
      <li className="nav-item">
      <NavLink className={({ isActive }) =>
    isActive ? 'bg-dark text-danger nav-link' : 'text-black nav-link'} to={"/cuenta"} >Cuenta</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className={({ isActive }) =>
    isActive ? 'bg-dark text-danger nav-link' : 'text-black nav-link'} to={"/categoria/autos"}>Autos</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className={({ isActive }) =>
    isActive ? 'bg-dark text-danger nav-link' : 'text-black nav-link'} to={"/categoria/motos"}>Motos</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className={({ isActive }) =>
    isActive ? 'bg-dark text-danger nav-link' : 'text-black nav-link'} to={"/carrito"}><i className="bi bi-cart4"></i>Carrito<CartWidget /></NavLink>
      </li>
      </ul>
  );
}

export default Navbar;