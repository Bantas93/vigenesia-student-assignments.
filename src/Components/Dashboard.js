import React from "react";
// import "sweetalert2";
const Dashboard = () => {
  return (
    <div className="container">
      <p>iduser : {localStorage.iduser}</p>
      <p>Nama : {localStorage.nama}</p>
      <p>profesi : {localStorage.profesi}</p>
      <hr />
    </div>
  );
};

export default Dashboard;
