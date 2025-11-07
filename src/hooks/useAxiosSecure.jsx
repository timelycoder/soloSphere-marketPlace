import axios from "axios";
import React from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  //   axios.interceptors.request;
  // Response Interceptor
  axiosSecure.interceptors.response.use(
    (res) => {
      // console.log(
      //   "response app aser age ami thamie dekheasi ki ase er vitor",
      //   res
      // );
      return res;
    },
    async (error) => {
      console.log("error from axios interceptor ok", error.response);
      if (error.response.status === 401 || error.response.status === 403) {
        await logout();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
