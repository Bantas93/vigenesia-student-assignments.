import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const UpdateMotivasi = () => {
  let { state } = useLocation();
  const [motivasi, setMotivasi] = useState(state.updateMotivasi.isi_motivasi);

  const setMotivasiValue = (e) => {
    setMotivasi(e.target.value);
  };

  const submitUpdate = () => {
    let formbody = [];
    const value1 = encodeURIComponent(motivasi);
    const key1 = encodeURIComponent("isi_motivasi");
    const key2 = encodeURIComponent("id");
    formbody.push(key1 + "=" + value1);
    formbody.push(key2 + "=" + state.updateMotivasi.id);
    formbody = formbody.join("&");
    fetch("http://www.vigenesia.org/api/dev/PUTmotivasi", {
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formbody,
    });
    window.alert(
      "Data Berhasil Di Update",
      (window.location.href = "/Data/DataMotivasi")
    );
  };
  return (
    <div className="text-center">
      <form>
        <div className="row justify-content-center">
          <div class="col-auto">
            <p>
              id : {state.updateMotivasi.id} | id User :{" "}
              {state.updateMotivasi.iduser}
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div class="col-auto">
            <label class="col-form-label">Motivasi :</label>
          </div>
          <div class="col-auto">
            <input
              value={motivasi}
              class="form-control"
              onChange={setMotivasiValue}
            />
          </div>
        </div>
      </form>

      <button className="btn btn-danger m-3">
        <Link
          to="/Data/DataMotivasi"
          style={{ textDecoration: "none", color: "white" }}
        >
          ⬅️Back
        </Link>
      </button>
      <button className="btn btn-primary m-3" onClick={submitUpdate}>
        Update
      </button>
    </div>
  );
};
export default UpdateMotivasi;
