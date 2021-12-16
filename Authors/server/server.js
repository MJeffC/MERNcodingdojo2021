const express = require("express");
const app = express();
const cors = require("cors");

require("./config/mongoose.config");

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

const authorRoutes = require("./routes/author.routes");
authorRoutes(app);

app.listen(8001, () => console.log("The server is all fired up on port 8001"));