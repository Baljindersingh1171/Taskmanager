const express = require("express");
const app = express();
const port = 5000;
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
// app.use(cors());
app.use(express.json());
app.use("/api/v1/tasks", tasks);

// app.use(express.static("./frontend/src"));
// routes

// app.get("/api/v1/tasks/:id", (req, res) => {
//   res.send();
// });
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
