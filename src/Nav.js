import React from 'react';

import { NavLink } from 'react-router-dom';

const Nav = ({ productsLength, salesLength }) => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          exact
          to="/products"
          activeClassName="active"
        >
          Products
          <span className="badge badge-primary" style={{ marginLeft: '10px' }}>
            {productsLength}
          </span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/products/sales"
          activeClassName="active"
        >
          Sales
          <span className="badge badge-primary" style={{ marginLeft: '10px' }}>
            {salesLength}
          </span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/products/create"
          activeClassName="active"
        >
          Create
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
