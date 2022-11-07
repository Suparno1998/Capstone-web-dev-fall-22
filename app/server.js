const express = require("express");
const logger = require("./utils/logger");
const path = require("path");
const passport = require("passport");
const { connectToDB } = require("./utils/dbHandler");
const { authHandler } = require("./routes/authHandler");
const { secureRouter } = require("./routes/secureRoutes");
const { router } = require("./routes/routes");
const adminRouter = require("./routes/admin");
require("dotenv").config();
const constants = require("./constants")(process.env.MODE);
console.log(constants);
//logger.info(process.env.PORT, process.env.DB_URL, process.env.BUILD_PATH)
const app = express();
const PORT = process.env.PORT ? process.env.PORT : 3000;
const DB_URL = constants.DB_URL; //process.env.DB_URL
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(express.static("./frontend/public"));
//auth handler handling all authentication requests
app.use("/auth", authHandler);
app.use("/admin", adminRouter);
//insecure router handling all insecure requests
app.use("/other", router);
app.use("/api", passport.authenticate("jwt", { session: false }), secureRouter);
//testing endpoint
app.get("/check", (req, res) => {
  try {
    logger.info("test-endpoint works");
    res.send({
      status: "works",
      data: ["Suparno", "Mohammed", "Meet", "Rupesh", "Vasu"],
    });
  } catch (err) {
    logger.error(err.message);
  }
});

// app.use((req,res,next)=>{
//   res.status(404)
//   res.redirect('/')
// })
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./frontend/public/index.html"));
});
app.listen(PORT, async (req, res) => {
  await connectToDB(DB_URL);
  logger.info(`Server is running at ${PORT}`);
});

//testing new commit
