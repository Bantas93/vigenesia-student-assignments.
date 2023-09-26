import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const DataUser = () => {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://www.vigenesia.org/api/user")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="container-fluid">
      <Navbar />
      <h4 className="text-center mt-3">
        Get Data dari {""}
        <Link
          to="http://www.vigenesia.org/api/user"
          style={{
            textDecoration: "none",
            color: "#212529",
          }}
          target="blank"
        >
          Vigenesia
        </Link>
      </h4>
      <div className="container p-5">
        <table className="table table-striped mt-5 text-center">
          <thead>
            <tr>
              <th className="border">No</th>
              <th className="border">Nama</th>
              <th className="border">Email</th>
              <th className="border">Profesi</th>
              <th className="border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, no) => (
              <tr key={user.idUser}>
                <td className="border">{no + 1}</td>
                <td className="border">{user.nama}</td>
                <td className="border">{user.email}</td>
                <td className="border">{user.profesi}</td>
                <td className="border  text-center">
                  <button className="btn btn-primary">
                    <Link
                      to="/UpdateData"
                      state={{ updateUser: user }}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Update
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataUser;
