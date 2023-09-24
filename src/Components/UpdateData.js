import { useLocation } from "react-router-dom";
import { useState } from "react";
const UpdateData = () => {
  let { state } = useLocation();

  let nama = state.updateUser.nama;
  let email = state.updateUser.email;
  let profesi = state.updateUser.profesi;

  let [getNama, setNama] = useState(nama);
  let [getEmail, setEmail] = useState(email);
  let [getProfesi, setProfesi] = useState(profesi);

  const setNamaValue = (event) => {
    setNama(event.target.value);
    nama = event.target.value;
  };
  const setEmailValue = (event) => {
    setEmail(event.target.value);
  };
  const setProfesiValue = (event) => {
    setProfesi(event.target.value);
  };
  function submitUpdate() {
    let formbody = [];
    // let index = 1;
    let value1 = encodeURIComponent(getNama);
    let value2 = encodeURIComponent(getEmail);
    let value3 = encodeURIComponent(getProfesi);
    let key1 = encodeURIComponent("iduser");
    let key2 = encodeURIComponent("nama");
    let key3 = encodeURIComponent("email");
    let key4 = encodeURIComponent("profesi");
    let key5 = encodeURIComponent("password");
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

    console.log(key1);
    console.log(state.updateUser["iduser"]);
    console.log(formbody);

    // for (let prop in state.updateUser) {
    //   let key = encodeURIComponent(prop);
    //   let value = encodeURIComponent(state.updateUser[prop]);

    //   console.log(
    //     index +
    //       " Prop: " +
    //       prop +
    //       " state.updateUser[prop] :" +
    //       state.updateUser[prop] +
    //       " " +
    //       key +
    //       " " +
    //       value +
    //       " " +
    //       { getNama }
    //   );
    //   index++;
    // }
  }
  return (
    <div>
      <h1>Ini Halaman Update</h1>
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
      <button className="btn btn-primary m-3" onClick={submitUpdate}>
        Update
      </button>
    </div>
  );
};

export default UpdateData;
