// start the server

const app=require("./app");

const dotenv=require("dotenv");
//load env variable
dotenv.config({path:"./config/config.env"})

PORT=process.env.PORT
app.listen(PORT,() =>{
    console.log(`Server started on PORT: ${PORT}`)
})

