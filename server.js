// Boilerplate Code for HTTP Status Code API
const express = require('express');
const app = express();

/*
Task:
You need to create an API that helps users understand different HTTP status codes and their meanings.

Requirements:
1. Create a GET endpoint at "/status-info".
2. The endpoint should accept a "code" as a query parameter (e.g., /status-info?code=200).
3. Based on the status code provided, the API should respond with:
   a. The status code.
   b. A description of the status code.

Example Responses:
- For 200 (OK):
  Request: /status-info?code=200
  Response:
  {
    "status": 200,
    "message": "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
  }

- For 404 (Not Found):
  Request: /status-info?code=404
  Response:
  {
    "status": 404,
    "message": "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
  }

- For 500 (Internal Server Error):
  Request: /status-info?code=500
  Response:
  {
    "status": 500,
    "message": "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
  }

- For 400 (Bad Request):
  Request: /status-info?code=400
  Response:
  {
    "status": 400,
    "message": "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
  }

List of Status Codes to Handle:
200, 201, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504
*/
app.get("/status-info",(req,res)=>{
  let code= req.query.code;
  
  let obj={
    status: code,
  };

  if (code==200){
    obj.message="OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
  }
  else if(code==201){
    obj.message="The request has been fulfilled, resulting in the creation of a new resource."
  }
  else if (code==204) {
    obj.message ="The server successfully processed the request and is not returning any content."
  }
  else if (code==401){
    obj.message="The client must authenticate itself to get the requested response."
  }
  else if (code==403){
    obj.message="The client does not have access rights to the content."
  }
  else if (code==404){
    obj.message="The server has not found anything matching the request URI. This is often caused by a missing page or resource"
  }
  else if (code==405){
    obj.message="The request method is known by the server but is not supported by the target resource."
  }
  else if (code==429){
    obj.message="The user has sent too many requests in a given amount of time (rate limiting)."
  }
  else if(code==502){
    obj.message="The server, while acting as a gateway or proxy, received an invalid response from the upstream server."
  }
  else if (code==503){
    obj.message="The server is not ready to handle the request. Common causes are server maintenance or overload."
  }
  else if (code==500){
    obj.message="Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
  }
  else if (code==400){
    obj.message="Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
  }
  else{
    obj.message="The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server."
  }
  return res.send(obj);
})
app.get("/", function(req, res){
    return res.send('<h1>Hello World</h1>')
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
