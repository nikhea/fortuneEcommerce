import { configureAuth } from "react-query-auth";
import {
  getUserProfile,
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  AuthResponse,
  logout,
} from "./api";
import { storage } from "./utils";

export type LoginCredentials = {
  email: string;
  password: string;
};

export type RegisterCredentials = {
  email: string;
  name: string;
  password: string;
};

async function handleUserResponse(data: any) {
  const {
    _id,
    token: jwt,
    email,
    firstname,
    userID,
    lastname,
    username,
    role,
    profile,
  } = data.data;

  storage.setToken(jwt);
  const user = {
    _id,
    // jwt,
    email,
    firstname,
    userID,
    lastname,
    username,
    role,
    profile,
  };
  return user;
}

async function userFn() {
  let user = null;

  if (storage.getToken()) {
    const data = await getUserProfile();
    if (data) {
      const {
        _id,
        email,
        firstname,
        lastname,
        userID,
        username,
        role,
        profile,
      } = data.data;
      user = {
        _id,
        // jwt:storage.getToken(),
        email,
        firstname,
        userID,
        lastname,
        username,
        role,
        profile,
      };
    }
  }
  return user;
}

async function loginFn(data: LoginCredentials) {
  const response = await loginWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function registerFn(data: RegisterCredentials) {
  const response = await registerWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function logoutFn() {
  // await logout();
  storage.clearToken();
}

export const { useUser, useLogin, useRegister, useLogout, AuthLoader } =
  configureAuth({
    userFn,
    loginFn,
    registerFn,
    logoutFn,
  });
