import React from "react";
import { useEffect, useState } from "react";
const Dashboard = () => {
  const iduser = localStorage.iduser;
  const nama = localStorage.nama;
  const profesi = localStorage.profesi;
  let [motivasiData, setMotivasiData] = useState([]);
  const Swal = require("sweetalert2");

  function clearData() {
    Swal.fire({
      title: "Apakah kamu ingin logout?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Ya",
      denyButtonText: `Tidak`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Berhasil Logout!", "", "success");
        localStorage.clear();
        window.location.href = "/";
      } else if (result.isDenied) {
        Swal.fire("Tidak Jadi Logout", "", "info");
      }
    });
  }

  useEffect(() => {
    fetch("http://www.vigenesia.org/api/Get_motivasi")
      .then((response) => response.json())
      .then((data) => {
        setMotivasiData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className=" bg-Dashboard">
      <div className="container-fluid p-3">
        <div className="text-start m-3">
          <span>id : {iduser}</span>
          <h1
            style={{
              fontWeight: "bold",
              textShadow: "1px 2px 5px pink",
              letterSpacing: "5px",
              color: "black",
            }}
          >
            Welcome,{" "}
            <span style={{ fontSize: "45px", color: "purple" }}>{nama} !</span>
          </h1>
          <button className="btn btn-success border-dark" disabled>
            {profesi}
          </button>
          <button onClick={clearData} className="btn btn-danger m-1">
            Logout
          </button>
        </div>
        <hr />
        <div>
          {motivasiData.map((motivasi) => (
            <div
              className="card shadow-sm m-3 p-3 bg-secondary-subtle"
              key={motivasi.id}
              style={{
                opacity: "90%",
              }}
            >
              <div
                className="card-body rounded text-end bg-secondary text-light"
                style={{
                  border: "dotted black 3px",
                  fontWeight: "bold",
                  letterSpacing: "5px",
                  textShadow: "2px 1px 3px black",
                }}
              >
                " {motivasi.isi_motivasi} "
              </div>
              <hr />
              <div className="d-flex" style={{ fontWeight: "lighter" }}>
                <div className="d-flex">
                  <div className="d-flex">
                    <span className="card-body">id : {motivasi.iduser}</span>
                  </div>
                  <div className="card-body">
                    Input : {motivasi.tanggal_input}
                  </div>
                  <div className="d-flex">
                    <div className="card-body">
                      Update : {motivasi.tanggal_update}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
