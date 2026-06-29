const express = require('express');
const { connectToMongoDB } = require("./connect");
const urlRouter = require("./routes/url");
const URL = require('./models/url');
const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/short-url")
.then(() =>
    console.log("mongoDB is Connected")
);


app.use(express.json());
app.use("/url", urlRouter);


app.get("/:shortId", (req, res) =>{
    const shortid={}
})
app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`);
})