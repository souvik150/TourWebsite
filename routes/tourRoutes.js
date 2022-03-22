const express = require("express");
const fs = require("fs");
const router = express.Router();

const getAllTours = (req, res) => {
    console.log(req.requestTime)
    res.status(200).json({
        status: 'Success',
        results: tours.length,
        data: {
            tours: tours,
        }
    })
}

const getTour = (req, res) => {
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id)

    if (!tour) {
        return res.status(404).json({
            status: 'fail',
            message: "Invalid ID",

        });

    }

    res.status(200).json({
        status: 'Success',
        data: {
            tour: tour,
        }
    })
}

const createTour = (req, res) => {
    const newID = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({
        id: newID
    }, req.body)

    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        })
    });
}

const updateTour = (req, res) => {

    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: "Invalid ID",

        });

    }

    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Updated Tour here...>'
        }
    })
}

const deleteTour = (req, res) => {

    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: "Invalid ID",

        });

    }

    //204 - No content
    res.status(204).json({
        status: 'success',
        data: null
    });
}

router.route('/')
    .get(getAllTours)
    .post(createTour);

router.route('/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour);

module.exports = router;
