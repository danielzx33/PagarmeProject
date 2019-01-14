import express from "express";
import {run  } from "./Pagarme";
import { ejs } from "ejs";



const server = express();
server.set("view engine", 'ejs');

server.get("/", (req, res, next) =>{
    res.render("index")
});

server.get("/teste", (req, res, next) =>{
    res.render("teste")
});

server.listen(3000,()=>{
    console.log("rodando!")
});
    