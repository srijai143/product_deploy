const express = require('express')
const app = express();
const mongoose = require('mongoose')
const professorRouter = require('./Routes/ProfessorRoutes')

app.use(express.json())
app.use("", professorRouter);

app.listen('5000', ()=> console.log('server running on 5000'))

mongoose.connect('mongodb+srv://Jai:jai123@mycluster.emud6.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster')
    .then(()=> console.log('database connected..'))
    .catch((err) => console.log(err))

app.get('/', (req, res)=>{
    res.send('server reacted...')
 })
console.log("new things")
    
