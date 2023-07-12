const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/routes");
const cors = require("cors")
const app =express()
app.use(cors())

app.use(express.json())

mongoose.connect("mongodb+srv://Bhavi:Bhavi123@cluster1.yydegcy.mongodb.net/zygalAssgn")
.then(()=> console.log("mongoDb is connected"))
.catch((err)=> console.log(err))

app.use("/",route)

app.listen(3001,()=>{
    console.log("server is running on port 3001")
})