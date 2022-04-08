const express = require('express');
const reviewController = require('./../controllers/reviewController');
const authController = require('./../controllers/authController');

//This merge params allows us to get access to the params in the url
const router = express.Router({ mergeParams: true });

//POST /tour/32324/reviews
//GET /tour/32324/reviews
//POST /reviews

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview
  );

router.route('/:id').delete(reviewController.deleteReview);

module.exports = router;
