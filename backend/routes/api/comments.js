/**
 * Express router for handling comment-related API endpoints.
 * 
 * Endpoints:
 * - GET /comments: Retrieves all comments from the database, populating the 'author' field.
 * - DELETE /comments/:id: Deletes a comment by its ID.
 * 
 * Dependencies:
 * - Express.js for routing.
 * - Mongoose for MongoDB object modeling.
 * - Comment model for comment documents.
 * 
 * Exports:
 * - Express router with comment routes.
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");


router.get("/comments", async (req, res, next) => {
    try {
        const comments = await Comment.find().populate("author");
        res.json({ comments });
    } catch (err) {
        next(err);
    }
});

router.delete("/comments/:id", async (req, res, next) => {
    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
});

module.exports = router;

// Hey GitHub Copilot, what is this file doing?