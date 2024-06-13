/* Installed Modules */
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

/* Defined Modules */
const { Database } = require("./config/database");
const userRouter = require("./routes/userRouter");
const { notFound, errorHandler } = require("./middleware/errorHandler");

/* App Configs */
const app = express();
dotenv.config();
Database(process.env.DB_URI);
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* CORS Configuration */
const corsOptions = {
  origin: "http://localhost:3000", // React app origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allowed methods
  preflightContinue: false,
  optionsSuccessStatus: 204, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions)); // Apply CORS middleware

/* Routes */
app.use("/api/user", userRouter);

app.use(notFound);
app.use(errorHandler);

/* App Start */
app.listen(PORT, () => {
  console.log(`Server Started at - ${PORT}`);
});
