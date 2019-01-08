import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => (
  <div>
    <div>
      <Link to="/faverate">Favorite</Link> | <Link to="/changepass">Change Password</Link>
    </div>
    <h1>Hello from Dashboard</h1>
  </div>
);

export default DashboardPage;
