const Tour = require('../models/tourModel');
const catchAsync = require('./../utlis/catchAsync');

exports.getOverview = catchAsync(async (req, res, next) => {
  //1) Get the data from the database
  const tours = await Tour.find();

  //2)Build the template
  //3) Render the template
  res.status(200).render('overview', {
    title: 'All Tours',
    tours
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  //1) Get the data from the database
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user'
  });

  //2)Build the template
  //3) Render the template

  res.status(200).render('tour', {
    title: `${tour.name} Tour`,
    tour: tour
  });
});
