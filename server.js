const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();

const app = express()

const authRoutes = require("./routes/auth")

mongoose.connect(process.env.DATABASE,{useCreateIndex:true,useFindAndModify:false,useNewUrlParser:true,useUnifiedTopology: true})
.then(()=>{
    console.log('conntected to database')
})
.catch((err)=>{    
    console.log(err)
})


app.use(bodyParser.json())
app.use(cookieParser());
app.use(morgan('dev'))


app.use("/api",authRoutes);

app.listen(process.env.PORT,()=>{
   console.log(`Server is running on PORT ${process.env.PORT}`)
})