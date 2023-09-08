//creating a server using http module
const json_obj=[
  {
    "id":1,
    "name":"node js is a open source platform",
     "batch":"EA23",
    "course":"full stack developper"
  },
  {
    "id":2,
    "name":"node js is a open source platform",
     "batch":"EA23",
    "course":"full stack developper"
  },
  {
    "id":3,
    "name":"node js is a open source platform",
     "batch":"EA23",
    "course":"full stack developper"
  }
]
let port = 3000;
// const cors=require('cors')
const http = require("http");
const app = http.createServer((req, res) => {
  // response.write('hello http server is running ')
  res.write("<html>");
  res.write("<body>");
  if (req.url === "/About"&&req.method==="PUT" ) {
    res.write("<h1> this is About page</h1>");
  }
  else if (req.url === "/Post") {
    res.write("<h1> this is Post page</h1>");
  }
  else if (req.url === "/fetchApi"&&req.method==="GET" ) {
    const data=JSON.stringify(json_obj);
    res.write(data);
  }
  else {
    res.write("<h1>what is node?</h1>");
    res.write(
      "<p>Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser</p>"
    );
  }
  res.write("</body>");
  res.write("</html>");
  res.end();
});
// app.use(cors(
//   {
//     // use "*" if u want to give access to any one public
//     origin:["http://localhost:3001","http://localhost:3001"]
//   }
// ))
app.listen(port, () => {
  console.log(`server running on port number: ${port}`);
});
