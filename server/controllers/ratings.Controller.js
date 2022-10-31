const ratings = require('../models/ratings.model.js');

const getAverageBookRatingByTitle = async (req, res) => {

    try{

        const {BookTitle} = req.query;

        const averageRating = await ratings.aggregate([{

            $match: {
                rating: {
                    $exists: true
                }

            }
        }, 
        {
            $group: {
                _id: null,
                    averageRatingValue: {
                        $avg: "$rating"
                    }
            }
        }
    ]);

    }
    catch(error) {
        console.log(error);
        return res.status(404).json({success: false, message: 'Book ratings not found in database'});
    }
}

const getAllBookRatingsByTitle = async (req, res) => {

    try{

        const {BookTitle} = req.query;
        const bookratings = await ratings.find({title : BookTitle}, {_id:0, year:0}).sort({rating: -1});

        return res.status(200).json(bookratings);

    }
    catch(error) {
        console.log(error);
        return res.status(404).json({success: false, message: 'Book ratings not found in database'});
    }
};

const getAllBookRatings = async (req, res) => {

    try{
        
        const bookratings = await ratings.find({},{_id:0, year:0}).sort({title: 1}).sort({rating: -1});
        return res.status(200).json(bookratings);

    }
    catch(error) {
        console.log(error);
        return res.status(404).json({success: false, message: 'Book ratings not found in database'});
    }
};

const createUserRating = async (req, res) => {

    try{

        const rating = req.body;
        const newRating = new ratings({
            title: rating.title,
            author: rating.author,
            rating: rating.rating,
            comment: rating.comment,
            username: rating.username,
            date: rating.date
        });
        await newRating.save();
        res.status(201).json({ 
            status: 201, message: "Rating successfully created", rating: newRating
        });
    } catch(error) {
        res.status(401).json({ status: 401, message: error.message })
    }
    
}

module.exports = {getAllBookRatings, getAllBookRatingsByTitle, createUserRating, getAverageBookRatingByTitle};
