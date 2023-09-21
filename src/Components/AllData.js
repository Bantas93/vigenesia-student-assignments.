import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllData = () => {
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
        <table className="table table-striped mt-5">
          <thead>
            <tr>
              <th className="border">No</th>
              <th className="border">Nama</th>
              <th className="border">Profesi</th>
              <th className="border">Email</th>
              <th className="border">Password</th>
              <th className="border">Role</th>
              <th className="border">Tgl Input</th>
              <th className="border">Tgl Modified</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.idUser}>
                <td className="border">{index + 1}</td>
                <td className="border">{user.nama}</td>
                <td className="border">{user.profesi}</td>
                <td className="border">{user.email}</td>
                <td className="border">{user.password}</td>
                <td className="border">{user.role_id}</td>
                <td className="border ps-3 pe-3">{user.tanggal_input}</td>
                <td className="border ps-3 pe-3">{user.modified}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllData;
