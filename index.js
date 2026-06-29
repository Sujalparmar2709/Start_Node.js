const express = require("express");
const {connectMongoDb} =  require("./connection");

const { logReqRes } = require("./middlewares");

const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

//connection
connectMongoDb("mongodb://127.0.0.1:27017/sujal").then(() =>
    console.log("MongoDB Connected")
);

app.use(express.urlencoded({extended: false}));
app.use(logReqRes('log.txt'));


app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`Server is running on PORT :${PORT}`));

