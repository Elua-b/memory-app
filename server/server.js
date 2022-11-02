const express =require("express")
const cors=require('cors')
const bodyParser= require("body-parser")
const  dotenv =require("dotenv")
const connection=require("./db")
 const postRoute=require ('./routes/posts')
const app=express();

app.use(bodyParser.json())
app.use(cors())
app.use('/posts',postRoute)
dotenv.config()
const port=process.env.PORT || 5000;
connection()
app.listen(port,()=> console.log(`app is listening at ${port}`))