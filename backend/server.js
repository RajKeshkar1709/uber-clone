const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.route')

dotenv.config()

const app  = express()
app.use(express.json())
connectDB()


app.get('/check',(req,res)=>{
    res.status(201).json({
        message:'hello world'
    })
})

app.use('/api/user',userRoutes)
app.use('/api/captain',captainRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`server started on ${process.env.PORT}`)
})