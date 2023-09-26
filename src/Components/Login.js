import { useState } from "react";
import { Link } from "react-router-dom";
// window.addEventListener("beforeunload", (ev) => {
//   ev.preventDefault();
//   return (
//     (ev.returnValue = "Are you sure you want to close?"), localStorage.clear()
//   );
// });
const Login = () => {
  const [nama, setNama] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleNamaValue = (e) => {
    setNama(e.target.value);
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
    const value2 = encodeURIComponent(email);
    const value3 = encodeURIComponent(password);
    const key1 = encodeURIComponent("nama");
    const key2 = encodeURIComponent("email");
    const key3 = encodeURIComponent("password");
    formbody.push(key1 + "=" + value1);
    formbody.push(key2 + "=" + value2);
    formbody.push(key3 + "=" + value3);
    formbody = formbody.join("&");

    fetch("http://www.vigenesia.org/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formbody,
    })
      .then((response) => response.json())
      .then((data) => {
        window.alert(data.message);
        localStorage.setItem("user", data.data.email);
        window.location.href = "/DataUser";
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center bg-login">
      <h2 class="d-flex text-white p-3" style={{ letterSpacing: "5px" }}>
        VIGENESIA
      </h2>
      <div
        class="card shadow-lg p-4 mb-2 bg-body-tertiary rounded"
        style={{ width: "22rem" }}
      >
        <div class="card-body">
          <div className="mb-3">
            <label name="inputName" className="form-label ">
              Nama
            </label>
            <input
              name="inputName"
              type="text"
              className="form-control"
              onChange={handleNamaValue}
            />
          </div>
          <div className="mb-3">
            <label name="inputEmail" className="form-label">
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
            <button className="btn btn-primary m-2" onClick={submit}>
              Login
            </button>
          </div>
        </div>
      </div>
      <p className="text-white" style={{ letterSpacing: "1px" }}>
        Belum memiliki akun ? klik{" "}
        <Link to="#" style={{ textDecoration: "none", color: "black" }}>
          Daftar
        </Link>
      </p>
    </div>
  );
};

export default Login;
