const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 8000;

const app = http.createServer((req, res) => {
  switch (req.url) {
      case "/src/assets/img1.jpg":
      fs.readFile(path.join(__dirname, "src/assets/img1.jpg"), (err, d) =>
        err ? console.log(err) : res.end(d)
      );
      break;
         case "/src/assets/img2.jpg":
      fs.readFile(path.join(__dirname, "src/assets/img2.jpg"), (err, d) =>
        err ? console.log(err) : res.end(d)
      );
      break;
         case "/src/assets/img3.jpg":
      fs.readFile(path.join(__dirname, "src/assets/img3.jpg"), (err, d) =>
        err ? console.log(err) : res.end(d)
      );
      break;
         case "/src/assets/img4.jpg":
      fs.readFile(path.join(__dirname, "src/assets/img4.jpg"), (err, d) =>
        err ? console.log(err) : res.end(d)
      );
      break;
         case "/src/assets/img5.jpg":
      fs.readFile(path.join(__dirname, "src/assets/img5.jpg"), (err, d) =>
        err ? console.log(err) : res.end(d)
      );
      break;
    case "/":
      fs.readFile(path.join(__dirname, "src/index.html"), (err, d) =>
        err ? console.log(err) : res.end(d)
      );
      break;

    case "/about":
      fs.readFile(path.join(__dirname, "src/about.html"), (err, d) =>
        err ? console.log(err) : res.end(d)
      );
      break;

    case "/course":
      fs.readFile(path.join(__dirname, "src/course.html"), (err, d) =>
        err ? console.log(err) : res.end(d)
      );
      break;

    case "/contact":
      fs.readFile(path.join(__dirname, "src/contect.html"), (err, d) =>
        err ? console.log(e) : res.end(d)
      );
      break;

    case "/services":
      fs.readFile(path.join(__dirname, "src/services.html"), (err, d) =>
        err ? console.log(err) : res.end(d)
      );
      break;

    default:
      res.end("Page not found");
  }
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
