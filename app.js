const express=require("express");
const app=express();

app.use(express.json());

const bookRoutes=require('./routes/books');
app.use(bookRoutes);

app.listen(3000,()=>{
    console.log("Server is running");
});