const express = require("express");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");
const { initDb, getDb } = require("./db.js");

const app = express();

require("dotenv").config();

app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "images-folder")));

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
    cb(null, Date.now() + "-" + req.body.fileName + ".jpg");
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

app.get("/all", async (req, res, next) => {
  const imageFiles = await getDb()
  .collection("images")
  .find()
  .sort(["_id", -1])
  .toArray();
  
  res.status(200).json({ images: imageFiles });

  // const imagesPath = path.join(__dirname, "/images");
  // const files = fs.readdirSync(imagesPath);

  // const imageFiles = files.map((path) => __dirname + "/images" + "/" + path);
  // for (let i = 0; i < imageFiles.length; i++) {
  //   imageFiles[i] = { imageUrl: imageFiles[i] };
  // }
});

app.post("/image-upload", async (req, res, next) => {
  if (!req.file) {
    return res.status(401).send("no image");
  }
  req.file.path = req.file.path.replace("\\", "/");

  try {
    const newImage = await getDb()
      .collection("images")
      .insertOne({
        path: __dirname + "/" + req.file.path,
        name: req.body.fileName,
      });
    res.status(200).json({ path: newImage.ops[0].path, name: newImage.ops[0].name });
  } catch (err) {
    console.log(err);
  }
});

app.get("/image-download/:imageName", (req, res, next) => {
  const image = path.join(__dirname, "/images", `/${req.params.imageName}`);
  
  const file = fs.createReadStream(image);
  
  res.setHeader("Content-Type", "image/jpeg");
  res.setHeader("Content-Disposition", "attachment");

  file.pipe(res);
});

app.delete("/delete-image", async (req, res, next) => {
  const imagePath = req.body.imagePath;
  const decodedImage = decodeURI(imagePath);
  fs.unlinkSync(__dirname + "/images/" + decodedImage.split("/")[12]);
  try {
    const deletion = await getDb().collection("images").deleteOne({path: __dirname + "/images/" + decodedImage.split("/")[12]});
    if(deletion) {
      const imageFiles = await getDb()
      .collection("images")
      .find()
      .sort(["_id", -1])
      .toArray();

      res.status(200).json({ images: imageFiles });
    }
  } catch(err) {
    console.log("err => ", err);
  }


  // res.redirect("/all");

  // const imagesPath = path.join(__dirname, "/images");
  // const files = fs.readdirSync(imagesPath);

  // const imageFiles = files.map((path) => __dirname + "/images" + "/" + path);
  // for (let i = 0; i < imageFiles.length; i++) {
  //   imageFiles[i] = { imageUrl: imageFiles[i] };
  // }
});

initDb((err, db) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(8080, () => {
      console.log("connection successful");
    });
  }
});
