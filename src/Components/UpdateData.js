import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
const UpdateData = () => {
  let { state } = useLocation();
  const [getNama, setNama] = useState(state.updateUser.nama);
  const [getEmail, setEmail] = useState(state.updateUser.email);
  const [getProfesi, setProfesi] = useState(state.updateUser.profesi);
  const [getPassword, setPassword] = useState(state.updateUser.password);

  const setNamaValue = (event) => {
    setNama(event.target.value);
  };

  const setEmailValue = (event) => {
    setEmail(event.target.value);
  };

  const setProfesiValue = (event) => {
    setProfesi(event.target.value);
  };

  const setPasswordValue = (event) => {
    setPassword(event.target.value);
  };

  function submitUpdate() {
    const Swal = require("sweetalert2");
    let formbody = [];
    // const index = 1;
    const value1 = encodeURIComponent(getNama);
    const value2 = encodeURIComponent(getEmail);
    const value3 = encodeURIComponent(getProfesi);
    const key1 = encodeURIComponent("iduser");
    const key2 = encodeURIComponent("nama");
    const key3 = encodeURIComponent("email");
    const key4 = encodeURIComponent("profesi");
    const key5 = encodeURIComponent("password");
    formbody.push(key1 + "=" + state.updateUser.iduser);
    formbody.push(key2 + "=" + value1);
    formbody.push(key3 + "=" + value2);
    formbody.push(key4 + "=" + value3);
    formbody.push(key5 + "=" + state.updateUser.password);
    formbody = formbody.join("&");

    fetch("http://www.vigenesia.org/api/PUTprofile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formbody,
    });
    Swal.fire({
      title: "success",
      text: "Data berhasil di Update !",
      icon: "success",
      confirmButtonText: "Oke",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/DataUser";
      }
    });
    // window.alert(
    //   "Data Berhasil Di Update !",
    //   (window.location.href = "/DataUser")
    // );
  }
  return (
    <div className="text-center">
      <h1 className="mb-5">Update User</h1>
      <form>
        <div className="row justify-content-center">
          <div class="col-auto">
            <label class="col-form-label">Nama :</label>
          </div>
          <div class="col-auto">
            <input
              value={getNama}
              class="form-control"
              onChange={setNamaValue}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="row justify-content-center">
            <div class="col-auto">
              <label class="col-form-label">Email :</label>
            </div>
            <div class="col-auto">
              <input
                value={getEmail}
                class="form-control"
                onChange={setEmailValue}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div class="col-auto">
              <label class="col-form-label">Password :</label>
            </div>
            <div class="col-auto">
              <input
                value={getPassword}
                class="form-control"
                onChange={setPasswordValue}
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="row justify-content-center">
            <div class="col-auto">
              <label class="col-form-label">Profesi :</label>
            </div>
            <div class="col-auto">
              <input
                value={getProfesi}
                class="form-control"
                onChange={setProfesiValue}
              />
            </div>
          </div>
        </div>
      </form>
      <button className="btn btn-danger m-3">
        <Link to="/DataUser" style={{ textDecoration: "none", color: "white" }}>
          ⬅️Back
        </Link>
      </button>
      <button className="btn btn-primary m-3" onClick={submitUpdate}>
        Update
      </button>
    </div>
  );
};

export default UpdateData;
