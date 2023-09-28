import { useState } from "react";
import { Link } from "react-router-dom";
// window.addEventListener("beforeunload", (e) => {
//   e.preventDefault();
//   return (
//     (e.returnValue = "Are you sure you want to close?"), localStorage.clear()
//   );
// });
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let handleEmailValue = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordValue = (e) => {
    setPassword(e.target.value);
  };

  const submit = () => {
    if (!email || !password) {
      // Validasi jika email atau password kosong
      window.alert("Email dan password harus diisi.");
      return;
    }

    let formbody = [];
    const value2 = encodeURIComponent(email);
    const value3 = encodeURIComponent(password);
    const key2 = encodeURIComponent("email");
    const key3 = encodeURIComponent("password");
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
        if (data.success) {
          // Autentikasi berhasil
          // localStorage.setItem("email", data.data.email);
          // localStorage.setItem("iduser", data.data.iduser);
          // window.alert(data.message);
          // window.location.href = "/DataUser";
        } else {
          if (data.message === undefined) {
            // Autentikasi gagal
            window.alert("Autentikasi gagal: data tidak sesuai");
          } else {
            window.alert(data.message);
            localStorage.setItem("iduser", data.data.iduser);
            localStorage.setItem("nama", data.data.nama);
            localStorage.setItem("email", data.data.email);
            localStorage.setItem("role_id", data.data.role_id);
            localStorage.setItem("profesi", data.data.profesi);
            window.location.href = "/DataUser";
          }
        }
      })
      .catch((error) => {
        console.error("Terjadi kesalahan: " + error);
      });
    // let formbody = [];
    // const value2 = encodeURIComponent(email);
    // const value3 = encodeURIComponent(password);
    // const key2 = encodeURIComponent("email");
    // const key3 = encodeURIComponent("password");
    // formbody.push(key2 + "=" + value2);
    // formbody.push(key3 + "=" + value3);
    // formbody = formbody.join("&");
    // console.log(formbody);
    // fetch("http://www.vigenesia.org/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    //   },
    //   body: formbody,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {});
  };
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center bg-login">
      <h2 className="d-flex text-white p-3" style={{ letterSpacing: "5px" }}>
        VIGENESIA
      </h2>
      <div
        className="card shadow-lg p-4 mb-2 bg-body-tertiary rounded"
        style={{ width: "22rem", opacity: "85%" }}
      >
        <div className="card-body">
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
        <Link to="/Daftar" style={{ textDecoration: "none", color: "green" }}>
          Daftar
        </Link>
      </p>
    </div>
  );
};

export default Login;
