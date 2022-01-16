import React from "react";
import axios from "axios";
const signin = () => {
  const callSignInAPI = async (email, password) => {
    try {
      const { data } = await axios.post(`/api/teacher/signin`, {
        email,
        password,
      });
      console.log(data);
    } catch (err) {
      console.log("error", err?.response?.data?.message);
    }
  };
  const handleSubmit = (event) => {
    console.log(process.env.NEXT_PUBLIC_SERVER_BASE_URL);
    event.preventDefault();
    alert("hello");
    const data = new FormData(event.currentTarget);
    // const res = signIn(data.get('email'), data.get('password'))
    callSignInAPI(data.get("email"), data.get("password"));
    // const res = await login(data.get("email"), data.get("password"));
  };
  return (
    <div style={{ margin: "200px" }}>
      <h1>Teacher SignIn Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <button type="Submit" style={{ background: "white", color: "black" }}>
            SignIn
          </button>
        </div>
      </form>
    </div>
  );
};

export default signin;
