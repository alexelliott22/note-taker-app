const express = require('express');

const PORT = process.env.port || 3001;
const app = express();
const noteRoute = require('./routes/notesRoutes');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

//use api route
app.use('/api', noteRoute);

app.listen(PORT, () => {
    console.log(`You are now on port ${PORT}!`)
})