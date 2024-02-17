import axios from "axios";
import { storage } from "../auth/utils";

let main = "https://backendfortuneecommerce.vercel.app/api/";
let test = "http://localhost:4000/api/";
// "https://hekto-v4oa.onrender.com/api/"
const instance = axios.create({
  baseURL: main,
  headers: {
    Authorization: `Bearer ${storage.getToken()}`,
  },
});

export default instance;
