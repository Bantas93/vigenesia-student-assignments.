import React from "react";
import { Link } from "react-router-dom";
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

  const postMotivasi = () => {
    window.location.href = "/PostMotivasi";
  };

  useEffect(() => {
    fetch(`http://www.vigenesia.org/api/Get_motivasi/`)
      .then((response) => response.json())
      .then((data) => {
        setMotivasiData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });

  return (
    <div className="">
      <div className="container-fluid p-3">
        <span>id : {iduser}</span>
        <div className="text-center m-3">
          <h1
            className="m-3"
            style={{
              fontWeight: "bold",
              textShadow: "1px 2px 5px pink",
              letterSpacing: "5px",
              color: "black",
            }}
          >
            Welcome,{" "}
            <span style={{ fontSize: "40px", color: "purple" }}>{nama} !</span>
          </h1>
          <p>
            Profesi :{" "}
            <button className="btn btn-success border-dark" disabled>
              {profesi}
            </button>
          </p>
        </div>
        <button onClick={clearData} className="btn btn-danger m-1">
          Logout
        </button>
        <button onClick={postMotivasi} className="btn btn-primary m-1">
          Post Motivasi
        </button>
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
                className="card-body rounded text-center bg-secondary-subtle text-dark"
                style={{
                  border: "solid black 3px",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  textShadow: "1px 1px 3px white",
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
                  <div className="d-flex">
                    <div className="card-body">
                      <Link
                        to="/UpdateMotivasi"
                        state={{ updateMotivasi: motivasi }}
                        style={{ textDecoration: "none", color: "white" }}
                        className="btn btn-primary text-center"
                      >
                        Update
                      </Link>
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
