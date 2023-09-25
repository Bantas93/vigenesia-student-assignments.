import { useState } from "react";

const Login = () => {
  const [nama, setNama] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const handleNamaValue = (e) => {
    setNama(e.target.value);
  };
  const handleEmailValue = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordValue = (e) => {
    setPassword(e.target.value);
  };

  const submit = () => {
    console.log(submit);
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
        setMessage(data.message);
        console.log(message);
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    // window.alert(message);
  };

  return (
    <div class="container">
      <div class="row align-items-center pb-5" style={{ height: "600px" }}>
        <div class="col"></div>
        <div class="col d-flex justify-content-center align-items-center border border-secondary p-5">
          <div>
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                onChange={handleNamaValue}
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                onChange={handleEmailValue}
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                onChange={handlePasswordValue}
              />
            </div>

            <button class="btn btn-primary" onClick={submit}>
              Login
            </button>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  );
};

export default Login;
