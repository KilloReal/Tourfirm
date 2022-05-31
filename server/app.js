const express = require("express");

const cors = require("cors");

const connectDB = require("./config/db");
const createAdminUser = require("./config/admin");

const auth = require("./routes/api/auth");
const books = require("./routes/api/books");

const app = express();

connectDB();
createAdminUser();

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello world!"));

app.use("/api/auth", auth);

app.use("/api/books", books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
