import axios from "axios";
import { toast } from "react-toastify";

export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const setUser = (user) => {
  return { type: SET_USER, payload: user };
};

export const setRoles = (roles) => {
  return { type: SET_ROLES, payload: roles };
};

export const setTheme = (theme) => {
  localStorage.setItem("theme", theme);
  return { type: SET_THEME, payload: theme };
};
export const setLanguage = (lang) => {
  localStorage.setItem("lang", lang);
  return { type: SET_LANGUAGE, payload: lang };
};

// export const fetchRoles = () => (dispatch, getState) => {
//   // Burada normalde axios.get('/api/roles') gibi bir istek yapılır.
//   // Biz şimdilik bir API isteğini simüle edelim (Mocking):

//   dispatch(setFetchState("FETCHING"));

//   setTimeout(() => {
//     // API'den dönen örnek veri:
//     const mockRoles = [
//       { id: 1, name: "Admin", code: "ADM" },
//       { id: 2, name: "Store Manager", code: "SM" },
//       { id: 3, name: "Customer", code: "CUST" },
//     ];

//     dispatch(setRoles(mockRoles));
//   }, 1000);
// };

export const loginUser = (credentials, history) => (dispatch) => {
  axios
    .post("https://workintech-fe-ecommerce.onrender.com/login", {
      email: credentials.email,
      password: credentials.password,
    })
    .then((res) => {
      const userData = res.data;

      if (credentials.rememberMe) {
        localStorage.setItem("token", userData.token);
      }

      dispatch(setUser(userData));

      toast.success("Welcome back! " + userData.name);

      if (history.length > 2) {
        history.goBack();
      } else {
        history.push("/");
      }
      console.log(userData);
    })
    .catch((err) => {
      console.error(err);
      toast.error(err.response?.data?.message || "Login failed! Please check your credentials.");
    });
};
