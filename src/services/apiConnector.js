import axios from "axios";

// export const axiosInstance = axios.create({});

// Add your backend's base URL here
export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // <-- Change this to match your backend port
  // Optional: Add a timeout
  timeout: 5000
});

export const apiConnector = (method, url, bodyData, headers, params) => {
  return   axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
   });
};
