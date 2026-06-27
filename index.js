const express = require("express");
const userRouter = require("./routes/user");

const {connectMongoDb} =  require("./connection");
const app = express();
const fs = require("fs");
const PORT = 8000;

//connection
connectMongoDb("mongodb://127.0.0.1:27017/sujal")''

app.use(express.urlencoded({extended: false}));


app.use((req, res) =>{
  fs.appendFile(
    "log.txt",
    `\n${Date.now()}: ${req.ip} ${req.method}: ${req.path}\n`,
    (err, date) =>{
    next();
    }
  );
})
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`Server is running on PORT :${PORT}`));

