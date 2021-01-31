const express = require("express");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow any origin to access API data
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  ); // allow GET, POST, etc. methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // allow these client headers (can also use '*' here)
  next();
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  approvedMimeType = ["image/png", "image/jpg", "image/jpeg"];
  if (approvedMimeType.indexOf(file.mimetype) > -1) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(multer({ storage: storage, fileFilter: fileFilter }).single("image"));
app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "images-folder")));

app.post("/image-upload", (req, res, next) => {
  if (!req.file) {
    return res.status(401).send("no image");
  }
  req.file.path = req.file.path.replace("\\", "/");
  res.status(200).json({ path: __dirname + "/" + req.file.path });
});

app.listen(8080, () => {  
  console.log("connection successful");
});
