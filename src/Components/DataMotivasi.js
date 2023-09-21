import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DataMotivasi = () => {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://www.vigenesia.org/api/Get_motivasi")
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
          to="http://www.vigenesia.org/api/Get_motivasi"
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
              <th className="border">Motivasi</th>
              <th className="border">Id User</th>
              <th className="border">Tgl Input</th>
              <th className="border">Tgl Update</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td className="border">{index + 1}</td>
                <td className="border">{user.isi_motivasi}</td>
                <td className="border">{user.iduser}</td>
                <td className="border">{user.tanggal_input}</td>
                <td className="border">{user.tanggal_update}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataMotivasi;
