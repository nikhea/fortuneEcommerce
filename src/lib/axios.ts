import axios from "axios";
import { storage } from "../auth/utils";

let main = "https://hekto-v4oa.onrender.com/api/";
let test = "http://localhost:4000/api/";
const instance = axios.create({
  baseURL: main,
  headers: {
    Authorization: `Bearer ${storage.getToken()}`,
  },
});

export default instance;
