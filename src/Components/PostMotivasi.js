import { useState } from "react";
import { Link } from "react-router-dom";
const UpdateMotivasi = () => {
  const Swal = require("sweetalert2");
  const [motivasi, setMotivasi] = useState();
  const id = localStorage.iduser;
  const setMotivasiValue = (e) => {
    setMotivasi(e.target.value);
  };
  const post = () => {
    let formbody = [];
    const value1 = encodeURIComponent(motivasi);
    const key1 = encodeURIComponent("isi_motivasi");
    const key2 = encodeURIComponent("iduser");
    formbody.push(key1 + "=" + value1);
    formbody.push(key2 + "=" + id);
    formbody = formbody.join("&");
    fetch("http://www.vigenesia.org/api/dev/POSTmotivasi", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formbody,
    }).then(() => {
      setTimeout(() => {
        window.location.href = "/Dashboard";
      }, 2000);
    });
  };

  const submitMotivasi = () => {
    Swal.fire({
      title: "Sudah Yakin?",
      text: "Postingan akan di Publish !",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Tidak",
      confirmButtonText: "Yakin !",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Sukses!", "Motivasi Berhasil Di Posting !", "success");
        post();
      }
    });
  };

  return (
    <div className="container-fluid p-5">
      <p>id : {id}</p>
      <div className="row justify-content-center p-5">
        <div class="col-auto">
          <textarea
            rows="5"
            cols="40"
            value={motivasi}
            onChange={setMotivasiValue}
            placeholder="Ketik Motivasi Kamu . . ."
          />
        </div>
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-danger m-3">
          <Link
            to="/Dashboard"
            style={{ textDecoration: "none", color: "white" }}
          >
            ⬅️Back
          </Link>
        </button>
        <button className="btn btn-primary m-3" onClick={submitMotivasi}>
          Posting
        </button>
      </div>
    </div>
  );
};
export default UpdateMotivasi;
