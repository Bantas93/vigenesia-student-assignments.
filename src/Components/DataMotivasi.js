import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import trash from "../assets/img/trash.png";

const DataMotivasi = () => {
  const userLogin = localStorage.iduser;

  let [motivasiData, setMotivasiData] = useState([]);
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

  const handleDeleteClick = (id) => {
    if (window.confirm("Yakin mau dihapus ?")) {
      let formbody = [];
      const value1 = encodeURIComponent(id);
      const key1 = encodeURIComponent("id");
      formbody.push(key1 + "=" + value1);
      formbody = formbody.join("&");
      fetch(`http://www.vigenesia.org/api/dev/DELETEmotivasi?=${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: formbody,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Gagal menghapus data");
          }
          window.location.reload();
        })
        .catch((error) => {
          console.error("Terjadi kesalahan saat menghapus data:", error);
        });
    }
  };
  if (userLogin == null) {
    return (
      <div className="container text-center mt-5">
        <h1>Anda belum login</h1>
        <p>Silahkan Login terlebih dahulu</p>
        <button className="btn btn-primary">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Ke Halaman Login
          </Link>
        </button>
      </div>
    );
  } else {
    return (
      <div className="container-fluid">
        <Navbar />
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
          <table className="table table-striped mt-5 text-center">
            <thead>
              <tr>
                <th className="border">No</th>
                <th className="border">Motivasi</th>
                <th className="border">Id User</th>
                <th className="border">Tgl Input</th>
                <th className="border">Tgl Update</th>
                <th className="border">Id</th>
                <th className="border">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {motivasiData.map((motivasi, index) => (
                <tr key={motivasi.id}>
                  <td className="border">{index + 1}</td>
                  <td className="border">{motivasi.isi_motivasi}</td>
                  <td className="border">{motivasi.iduser}</td>
                  <td className="border">{motivasi.tanggal_input}</td>
                  <td className="border">{motivasi.tanggal_update}</td>
                  <td className="border">{motivasi.id}</td>
                  <td className="border">
                    <button className="btn btn-primary m-1">
                      <Link
                        to="/UpdateMotivasi"
                        state={{ updateMotivasi: motivasi }}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Update
                      </Link>
                    </button>
                    <button
                      onClick={() => handleDeleteClick(motivasi.id)} // Panggil fungsi handleDeleteClick dengan ID motivasi sebagai argumen
                      className="btn btn-danger m-1"
                    >
                      <img src={trash} alt="trash" height={18}></img>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default DataMotivasi;
