import express from "express";
import dotenv from 'dotenv';
import router from "../Router/UserRoutes.js";
const { config } = dotenv;
config({
    path: './.env'
})
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
const port = process.env.PORT || 3000


app.use('/user', router)
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
