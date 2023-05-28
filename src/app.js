/** @format */
const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const port = 3000;
const admin_blogs = require("./routes/admin_blogs");
const user_blogs = require("./routes/user_blogs");
require("dotenv").config();
//Port

//middelware
app.use(express.json());

//routes
app.use("/api/v1/blogs", admin_blogs);
app.use("/api/v1/user/blogs", user_blogs);

const startServer = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`$RED's server is running on ${port}`);
        });
    } catch (error) {
        throw error;
    }
};

startServer();
