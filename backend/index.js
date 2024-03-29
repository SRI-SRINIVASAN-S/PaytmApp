const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 9000;
const mainRouter = require("./routes/index");

app.use(cors());
app.use(express.json());

app.use("/api/v1", mainRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
