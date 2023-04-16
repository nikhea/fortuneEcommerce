import axios from "axios";

let main = "https://backendfortuneecommerce-production.up.railway.app/api/";
let test = "http://localhost:4000/api/";
const instance = axios.create({
  baseURL: test,
});

export default instance;
