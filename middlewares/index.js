const fs = require("fs");

async function logReqRes(filename){
    return (req,res,next) => {
            fs.appendFile(filename,`${req.ip} , ${Date.now()}, ${req.path}`,(err,data) =>{});
            // console.log("hey from middleware 1");
            next();
        }
        
        // app.use((req,res,next) =>{
        //     console.log("hey from middleware 2");
        //     return res.json({message: "middleware return the request"});
        // })
    }


module.exports = logReqRes;