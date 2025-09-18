import axios from "axios";

// export const axiosInstance = axios.create({});

// Add your backend's base URL here
export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000", // <-- Change this to match your backend port
  // Optional: Add a timeout
  timeout: 10000
});

export const apiConnector = (method, url, bodyData, headers, params) => {
  console.log("API Connector called with:", { method, url, bodyData, headers, params });
  return axiosInstance({
    method: method,
    url: url,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : { 'Content-Type': 'application/json' },
    params: params ? params : null,
  });
};
