const express = require("express");
const cors = require('cors');
const env = require('dotenv');
const router = require('./routes/portfolioRoutes')
const path = require('path');

env.config();

const app = express();

app.use(express.json());
app.use(cors());


app.use('/sendEmailRouter', router)
        
app.get('/', (req, res)=>{
    app.use(express.static(path.join(__dirname, './client/build')));
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});


const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`Server is live at port: ${port}`)
})
