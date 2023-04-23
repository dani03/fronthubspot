import axios from "axios";

window.axios = axios;
//on definir ici l'url de notre API ou nous allons effectués des requetes

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios.defaults.withCredentials = true;
window.axios.defaults.baseURL = "http://localhost:5000/api/v1";


import { useAuth } from "@/stores/auth";

window.axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const auth = useAuth();
      auth.destroyTokenAndRedirectTo("register");
    }

    return Promise.reject(error);
  }
);

//lorsqu'on rafraihit la page on verifie le token dans le localstorage
if (localStorage.getItem("access_token")) {
  window.axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("access_token")}`;
}