import express from 'express'
import mongoose from 'mongoose'
import BookRouter from './routers/book.js'

const app=express()

app.use(express.json())

app.use('/api/book', BookRouter)

const PORT=process.env.PORT || 3000
app.listen(PORT, ()=>   {
    mongoose.connect('mongodb+srv://new-user:JSoV1YXtUvVPOLa1@cluster0.wtfkm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(()=>console.log('Connected to MongoDB')).catch(err=>console.log(err))
})