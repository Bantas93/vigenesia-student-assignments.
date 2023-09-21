import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [nama, setNama] = useState([]);
  const [email, setEmail] = useState([]);
  useEffect(() => {
    fetch("http://www.vigenesia.org/api/user")
      .then((response) => response.json())
      .then((data) => {
        setNama(data[865].nama);
        setEmail(data[865].email);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  // eslint-disable-next-line
  return (
    <div className="container-fluid text-center">
      <h4 className="mt-3">Get Data dari Vigenesia</h4>
      <p>Nge-Hit API by Name</p>
      <p>{nama}</p>
      <br />
      <p> {email}</p>
    </div>
  );
};

export default Dashboard;
