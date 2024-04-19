import React from "react";

const Analytics = () => {
  const salesData = [
    { month: "Jan", revenue: 1500 },
    { month: "Feb", revenue: 2000 },
    { month: "Mar", revenue: 1800 },
    { month: "Apr", revenue: 2200 },
    { month: "May", revenue: 2500 },
    { month: "Jun", revenue: 2800 },
  ];

  return (
    <div>
      <h2>Analytics</h2>
      <div className="sales-chart">
        <h3>Sales Performance</h3>
        <ul>
          {salesData.map((data) => (
            <li key={data.month}>
              {data.month}: ${data.revenue}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Analytics;