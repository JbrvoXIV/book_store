const ratings = require('../models/ratings.model.js');

const getAverageBookRatingByTitle = async (req, res) => {

    try{

        const {BookTitle} = req.query;

        const averageRating = await ratings.aggregate([{
            
                $match: {
                    title: BookTitle
                }
            },
            {
            $group: 
                {"_id":null,  
                "avg_rating": {"$avg": "$rating"}
            }}])

        return res.status(200).json(averageRating);
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

const createUserComment = async (req, res) => {

    try{

        const comm = req.body;
        const newComment = new ratings({
            title: comm.title,
            author: comm.author,
            comment: comm.comment,
            username: comm.username,
            date: comm.date
        });
        await newComment.save();
        res.status(201).json({ 
            status: 201, message: "Comment successfully created", comment: newComment
        });
    } catch(error) {
        res.status(401).json({ status: 401, message: error.message })
    }
    
}

module.exports = {getAllBookRatings, getAllBookRatingsByTitle, createUserRating, createUserComment, getAverageBookRatingByTitle};
