const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const noteRoute = require('./routes/notesRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));


//use api route
app.use('/api', noteRoute);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`You are now on port ${PORT}!`)
})