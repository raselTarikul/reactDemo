import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios.post("/apis/v1/login/", credentials).then(res => res.data),
    signup: data =>
      axios.post("/apis/v1/register/", data).then(res => res.data),

    companies: () =>
      axios.get("/apis/v1/companies/").then(res => res.data),
  }
};