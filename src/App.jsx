import { useEffect } from "react";
import "./App.css";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import Footer from "./layout/Footer";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCategories } from "./store/actions/ProductAction";
import { setUser } from "./store/actions/ClientAction";
import useAxios, { METHODS } from "./hooks/useAxios";

function App() {
  const dispatch = useDispatch();
  const { sendRequest: sendGetRequest } = useAxios({});

  useEffect(() => {
    sendGetRequest({
      url: `/categories`,
      method: METHODS.GET,
      callbackSuccess: (response) => {
        dispatch(setCategories(response.data));
      },
    });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const header = { Authorization: token };
    if (token) {
      sendGetRequest({
        url: `/verify`,
        method: METHODS.GET,
        headers: header,
        callbackSuccess: (response) => {
          dispatch(setUser(response.data));
        },
        callbackError: (error) => {
          if (
            error.response?.status === 401 ||
            error.response?.status === 403
          ) {
            localStorage.removeItem("token");
          }
        },
      });
    }
  }, []);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Header />
      <PageContent />
      <Footer />
    </>
  );
}

export default App;
