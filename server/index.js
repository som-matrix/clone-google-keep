import express from 'express';
import cors from 'cors'
const app = express()
// Simple Enable all cors request
app.use(cors())
// Bodyparser middleware
app.use(express.urlencoded({extended:'false'}))
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log('Server is Running..')
})