const fs = require('fs');
const express = require("express");
const app = express();

// app.get('/', (req, res) => {
//     // res.status(200).send('Hello from the server side')
//     res.status(200).json({message: 'Hello from the server side', app: 'Natours'})
// });
//
// app.post('/', (req, res) => {
//     res.send('You can post to this endpoint.')
// });

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/tours-simple.json`)
);

app.get('/api/v1/tours', (req,res) => {
    res.status(200).json({
        status: 'Success',
        data: {
            tours: tours,
        }
    })
})

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`)
});

