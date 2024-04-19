import React from "react";

const Dashboard = () => {
  const totalOrders = 50;
  const totalRevenue = 2500;
  const newCustomers = 10;
  const popularProduct = "Sushi Roll";
  const pendingOrders = 5;

  return (
    <div className="container">
      <h2 className="mt-4 mb-3">Dashboard</h2>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h3 className="card-title">Total Orders</h3>
              <p className="card-text">{totalOrders}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card bg-success text-white">
            <div className="card-body">
              <h3 className="card-title">Total Revenue</h3>
              <p className="card-text">${totalRevenue}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card bg-info text-white">
            <div className="card-body">
              <h3 className="card-title">New Customers</h3>
              <p className="card-text">{newCustomers}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card bg-warning text-dark">
            <div className="card-body">
              <h3 className="card-title">Popular Product</h3>
              <p className="card-text">{popularProduct}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card bg-danger text-white">
            <div className="card-body">
              <h3 className="card-title">Pending Orders</h3>
              <p className="card-text">{pendingOrders}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3>Recent Orders</h3>
        <ul className="list-group">
          <li className="list-group-item">Order #1234 - Customer: John Doe</li>
          <li className="list-group-item">Order #5678 - Customer: Jane Smith</li>
          <li className="list-group-item">Order #9012 - Customer: Michael Johnson</li>
          <li className="list-group-item">Order #3456 - Customer: Sarah Davis</li>
          <li className="list-group-item">Order #7890 - Customer: Robert Wilson</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
