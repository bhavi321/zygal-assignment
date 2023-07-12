const express =require("express");
const { createUser,logIn } = require("../controller/controller");
const router = express.Router()




router.post("/signUp",  createUser);
router.post("/logIn",logIn);




module.exports = router