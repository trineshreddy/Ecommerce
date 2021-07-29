
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

// import products from './data/products.js'

import productRoutes from './routes/productRoutes.js'




dotenv.config()

connectDB()

const app = express()



app.get('/', (req, res) => {
    res.send('API is running....')
})


app.use('/api/products', productRoutes)


app.use(notFound)

//custom middle ware handling when ever an api request is made  this code will be executed next
app.use(errorHandler)






const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
)