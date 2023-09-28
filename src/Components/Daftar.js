import { useState } from "react";
import { Link } from "react-router-dom";

const Daftar = () => {
  const [nama, setNama] = useState();
  const [profesi, setProfesi] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let handleNamaValue = (e) => {
    setNama(e.target.value);
  };
  let handleProfesiValue = (e) => {
    setProfesi(e.target.value);
  };
  let handleEmailValue = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordValue = (e) => {
    setPassword(e.target.value);
  };

  const submit = () => {
    let formbody = [];
    const value1 = encodeURIComponent(nama);
    const value2 = encodeURIComponent(profesi);
    const value3 = encodeURIComponent(email);
    const value4 = encodeURIComponent(password);
    const key1 = encodeURIComponent("nama");
    const key2 = encodeURIComponent("profesi");
    const key3 = encodeURIComponent("email");
    const key4 = encodeURIComponent("password");
    formbody.push(key1 + "=" + value1);
    formbody.push(key2 + "=" + value2);
    formbody.push(key3 + "=" + value3);
    formbody.push(key4 + "=" + value4);
    formbody = formbody.join("&");
    fetch("https://www.vigenesia.org/api/registrasi", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formbody,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.data == null) {
          window.alert(data);
        } else {
          window.alert("Vigenesia said: " + data.message);
          window.location.href = "/";
        }
      });
  };
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center bg-login">
      <h2 className="d-flex text-white p-3" style={{ letterSpacing: "5px" }}>
        VIGENESIA
      </h2>
      <div
        className="card shadow-lg p-3 mb-3 bg-body-tertiary rounded"
        style={{ width: "25rem", opacity: "90%" }}
      >
        <div className="card-body">
          <h4 className="text-center" style={{ letterSpacing: "2px" }}>
            DAFTAR AKUN
          </h4>
          <hr />
          <div className="mb-3">
            <label name="inputEmail" className="form-label mt-3">
              Nama
            </label>
            <input
              name="inputNama"
              type="text"
              className="form-control"
              onChange={handleNamaValue}
            />
          </div>
          <div className="mb-3">
            <label name="inputEmail" className="form-label mt-3">
              Profesi
            </label>
            <input
              name="inputProfesi"
              type="text"
              className="form-control"
              onChange={handleProfesiValue}
            />
          </div>
          <div className="mb-3">
            <label name="inputEmail" className="form-label mt-3">
              Email
            </label>
            <input
              name="inputEmail"
              type="email"
              className="form-control"
              onChange={handleEmailValue}
            />
          </div>
          <div className="mb-3">
            <label name="inputPassword" className="form-label">
              Password
            </label>
            <input
              name="inputPassword"
              type="password"
              className="form-control"
              onChange={handlePasswordValue}
            />
          </div>
          <div className="text-center">
            <button className="btn btn-danger m-3">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                ⬅️ Login
              </Link>
            </button>
            <button className="btn btn-primary m-3" onClick={submit}>
              Daftar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
