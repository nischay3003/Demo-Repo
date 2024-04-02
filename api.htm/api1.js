const express=require('express');
const mongoose=require('mongoose');
const app=express();

app.get("/",(req,res)=>{
    res.send("done");
});
app.listen(3000,()=>{
    console.log("updated 8");
});
mongoose.connect("mongodb+srv://nischay728:<839wI85YiXg6cwxv>@backenddb.876dxl2.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    console.log("Connected to database");







}
