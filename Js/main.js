"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server = express_1.default();
server.set("view engine", 'ejs');
// server.use(express.static(path.join(__dirname , "Js")))
server.use('/assets', express_1.default.static("Js"));
server.get("/", (req, res, next) => {
    res.render("index");
});
server.post("/comprar", (req, res, next) => {
    res.send("krl maluco");
});
server.listen(3000, () => {
    console.log("rodando!");
});
//# sourceMappingURL=main.js.map