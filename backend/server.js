

var express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routerUrl = require('./routes/route');
const cors = require('cors');


dotenv.config()



// Start Connect to MongoDB 
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log('Database Connected...'))
// End Connect to MongoDB 


app.listen(4000, () => console.log('Server is Up and Running..'))
app.use(express.json());
app.use(cors());
app.use('/app', routerUrl);
