import React from "react";
import axios from "axios";
const signup = () => {
  const callSignUpAPI = async (
    firstname,
    lastname,
    schoolname,
    email,
    password
  ) => {
    try {
      const { data } = await axios.post(`/api/teacher/signup`, {
        firstname,
        lastname,
        schoolname,
        email,
        password,
      });
      console.log(data);
    } catch (err) {
      console.log("error", err?.response?.data?.message);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    callSignUpAPI(
      data.get("firstname"),
      data.get("lastname"),
      data.get("schoolname"),
      data.get("email"),
      data.get("password")
    );
  };
  return (
    <div style={{ margin: "200px" }}>
      <h1>Teacher Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">firstname</label>
          <input type="text" name="firstname" id="firstname" />
        </div>
        <div>
          <label htmlFor="lastname">lastname</label>
          <input type="text" name="lastname" id="lastname" />
        </div>
        <div>
          <label htmlFor="school">schoolname</label>
          <input type="text" name="schoolname" id="schoolname" />
        </div>
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
            signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default signup;
