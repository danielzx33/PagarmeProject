import express from "express";
import {run  } from "./Pagarme";
//import { ejs } from "ejs";
import path from "path";



const server = express();
server.set("view engine", 'ejs');
// server.use(express.static(path.join(__dirname , "Js")))
server.use('/assets', express.static("Js"));

server.get("/", (req, res, next) =>{
    res.render("index")
});

server.post("/comprar", (req, res, next) =>{
    res.send("krl maluco")
});

server.listen(3000,()=>{
    console.log("rodando!")
});
    