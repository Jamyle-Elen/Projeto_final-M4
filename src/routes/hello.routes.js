import { Router } from "express";
import { helloSend } from "../controllers/helloController.js";

const hello= Router()

hello.get("/hello", (req, res) => {
    res.send(helloSend())
})

export{hello}