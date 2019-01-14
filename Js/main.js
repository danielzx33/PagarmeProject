"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import { ejs } from "ejs";
const path_1 = __importDefault(require("path"));
const server = express_1.default();
server.set("view engine", 'ejs');
server.use(express_1.default.static(path_1.default.join(__dirname, "Js")));
server.get("/", (req, res, next) => {
    res.render("index");
});
server.get("/teste", (req, res, next) => {
    res.render("teste");
});
server.listen(3000, () => {
    console.log("rodando!");
});
//# sourceMappingURL=main.js.map