import { useLocation } from "react-router-dom";
import { useState } from "react";
const UpdateData = () => {
  let { state } = useLocation();

  // let nama = state.updateUser.nama;
  // let email = state.updateUser.email;
  // let profesi = state.updateUser.profesi;

  const [getNama, setNama] = useState(state.updateUser.nama);
  const [getEmail, setEmail] = useState(state.updateUser.email);
  const [getProfesi, setProfesi] = useState(state.updateUser.profesi);

  const setNamaValue = (event) => {
    setNama(event.target.value);
  };
  const setEmailValue = (event) => {
    setEmail(event.target.value);
  };
  const setProfesiValue = (event) => {
    setProfesi(event.target.value);
  };
  function submitUpdate() {
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
// import { useLocation } from "react-router-dom";
// import { useState } from "react";

// const UpdateData = () => {
//   const { state } = useLocation();
//   let { iduser, nama, email, profesi, password } = state.updateUser;
//   const [formData, setFormData] = useState({
//     nama: nama,
//     email: email,
//     profesi: profesi,
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
//   console.log(setFormData.nama);

//   const submitUpdate = async () => {
//     try {
//       const response = await fetch("http://www.vigenesia.org/api/PUTprofile", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
//         },
//         body: `iduser=${iduser}&nama=${formData.nama}&email=${formData.email}&profesi=${formData.profesi}&password=${password}`,
//       });

//       if (!response.ok) {
//         throw new Error("Failed to update data");
//       }

//       // Handle success or redirect to another page
//     } catch (error) {
//       console.error("Error:", error);
//       // Handle error and display a message to the user
//     }
//   };

//   return (
//     <div>
//       <form>
//         <div className="row justify-content-center">
//           <div class="col-auto">
//             <label class="col-form-label">Nama :</label>
//           </div>
//           <div class="col-auto">
//             <input
//               // value={setFormData.nama}
//               class="form-control"
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>
//         <div className="row justify-content-center">
//           <div className="row justify-content-center">
//             <div class="col-auto">
//               <label class="col-form-label">Email :</label>
//             </div>
//             <div class="col-auto">
//               <input
//                 // value={state.updateUser.email}
//                 class="form-control"
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="row justify-content-center">
//           <div className="row justify-content-center">
//             <div class="col-auto">
//               <label class="col-form-label">Profesi :</label>
//             </div>
//             <div class="col-auto">
//               <input
//                 // value={state.updateUser.profesi}
//                 class="form-control"
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//         </div>
//       </form>
//       <button className="btn btn-primary m-3" onClick={submitUpdate}>
//         Update
//       </button>
//     </div>
//   );
// };

// export default UpdateData;
