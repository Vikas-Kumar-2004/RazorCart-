import express from "express";
import payment from './routes/productRoutes.js'
const app=express();
app.use(express.json());//parse data
app.use(express.urlencoded({extended:true}))

app.use('/api/v1',payment)
export default app;
