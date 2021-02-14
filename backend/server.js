
var express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routerUrl = require('./routes/route');
const cors = require('cors');
const cookieparser = require('cookie-parser');



dotenv.config()



// Start Connect to MongoDB 
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log('Database Connected...'))
// End Connect to MongoDB 


app.listen(4000, () => console.log('Server is Up and Running..'))
app.use(express.json());
app.use(cookieparser());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}));
app.use('/app', routerUrl);
