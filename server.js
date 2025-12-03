const express = require('express');
const connectDB=require('./config/db');
const authRoutes=require('./routes/auth');

const app = express();

const PORT=3000;

connectDB();

app.use(express.json());

app.use(express.static('public'));

app.use('/api/auth',authRoutes);



const path = require('path');

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','login.html'));
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
