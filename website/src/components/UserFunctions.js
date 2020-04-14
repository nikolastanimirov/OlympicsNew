import axios from "axios";

export const register = (newUser) => {
  return axios
    .post("users/register", {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
    })
    .then((res) => {
      console.log("THe user has been registrated...");
    });
};

export const login = (user) => {
  console.log(user.email);
  return axios
    .post("users/login", {
      email: user.email,
      password: user.password,
    })
    .then((res) => {
      localStorage.setItem("usertoken", res.data);
      console.log("yes");
      return res.data;
    })
    .catch((err) => {
      console.log("err");
      alert("Email or Password is incorrect!");
      console.log(err);
    });
};
