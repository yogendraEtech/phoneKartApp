let BASE_URL;

if (process.env.NODE_ENV !== "production") {
  //BASE_URL = "http://localhost:3000/";
  BASE_URL = "https://my-json-server.typicode.com/nitinbrains/demo/phones";
} 
export default BASE_URL;
console.log(BASE_URL,process.env.NODE_ENV);
// export const BASE_URL2 =
//   "https://my-json-server.typicode.com/nitinbrains/demo/phones";


