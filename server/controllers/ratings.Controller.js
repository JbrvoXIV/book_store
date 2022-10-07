const ratings = require('../models/ratings.model.js');

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

module.exports = {getAllBookRatings, getAllBookRatingsByTitle};
