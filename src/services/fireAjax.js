import axios from "axios";
import BASE_URL from "../config/config";
import { toast } from "react-toastify";

export default function fireAjax(method, data) {
  let url = BASE_URL 
  
  if (method === "GET") {
    return axios
      .get(url, data)
      .then(response => {
          if(response){
              console.log(response,'resp---fireajax')
        return response;
          }
      })
      .catch(error => {
          console.log(error,'errrrrrrrrr')
        if (error.response.status == 401) {
          toast.error("session Expired");
          window.location.href = "/";
        } else {
          return error.response;
        }
      });
  } else if (method === "POST") {
    return axios
      .post(url, data)
      .then(response => {
        return response;
      })
      .catch(error => {
        if (error.response.status == 401) {
          toast.error("session Expired");
          window.location.href = "/";
        } else {
          return error.response;
        }
      });
  } 
  else if (method === "DELETE") {
    return axios
      .delete(url, data)

      .then(response => {
        return response;
      })
      .catch(error => {
        console.log(error.response.status);
        
        if (error.response.status == 401) {
          toast.error("session Expired");
          // window.location.href = "/";
        } else {
          return error.response;
        }
      });
    }
  else if (method === "PUT") {
    return axios
      .put(url, data)
      .then(response => {
        return response;
      })
      .catch(error => {
        if (error.response.status == 401) {
          toast.error("session Expired");
          window.location.href = "/";
        } else {
          return error.response;
        }
      });
  } 
}
