const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const {connectMongoDb} = require("./connection.js");
const {logReqRes} = require("./middlewares/index.js");

app.use(express.urlencoded({extended:false}));      // Middleware  used to recieve data from body of form!!!
const PORT = 8000;
//Connection with DB

connectMongoDb("mongodb://127.0.0.1:27017/backend-01").then(()=>{
    console.log("MongoDB connected");
});

// Schema



//Middleware


//Server Side rendering

//Routes
app.use("/api/users",userRouter);


app.listen(PORT,()=>{
    console.log(`Server is listening on the PORT: ${PORT}`)
}) 