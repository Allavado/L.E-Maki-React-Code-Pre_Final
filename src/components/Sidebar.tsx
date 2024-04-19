import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <Link to="/admin">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/orders">Orders</Link>
        </li>
        <li>
          <Link to="/admin/products">Products</Link>
        </li>
        <li>
          <Link to="/admin/customers">Customers</Link>
        </li>
        <li>
          <Link to="/admin/analytics">Analytics</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;