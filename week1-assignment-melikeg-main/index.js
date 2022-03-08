var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const http = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/users";
var method = "GET";

http.open(method, url);

http.onreadystatechange = () => {
  if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
    console.log(JSON.parse(http.responseText));
  } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
    console.log("Error");
  }
};

http.send();
