import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const METHODS = {
  POST: "post",
  GET: "get",
  PUT: "put",
  DELETE: "delete",
};

export default function useAxios({
  initialData,
  baseURL = "https://workintech-fe-ecommerce.onrender.com",
}) {
  const [data, setData] = useState(initialData);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const instance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {},
  });

  const sendRequest = ({
  url,
  method,
  data = null,
  headers = null,
  redirect = null,
  callbackSuccess = null,
  callbackError = null,
}) => {
  setLoading(true);
  
  console.log("sendRequest starts:", {
    url,
    method,
    data,
    hasHeaders: !!headers,
  });

  const requestConfig = method === METHODS.GET || method === METHODS.DELETE
    ? [url, { headers }]
    : [url, data, { headers }];

  instance[method](...requestConfig)
    .then(function (response) {
      setData(response.data);
      setLoading(false);
      setError(null);
      callbackSuccess && callbackSuccess(response); 
      redirect && history.push(redirect);
      // console.log("sendRequest response: ", response, "loading: ", loading);
    })
    .catch(function (error) {
      console.log("sendRequest error: ", error);
      callbackError && callbackError(error); 
      setError(error.message);
      setLoading(false);
    });
};

  return { data, sendRequest, setData, error, loading, METHODS };
}
