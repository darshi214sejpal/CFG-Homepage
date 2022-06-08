const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');

//ROUTE 1: Get All Notes of a User using: GET "/api/notes/fetchallnotes". Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    const notes = await Notes.find({user: req.user.id});
    res.json(notes);
})


//ROUTE 2: ADD a new Notes of a User using: POST "/api/notes/addnote". Login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter title of minimum 3 characters length').isLength({ min: 3 }),
    body('description', 'Enter description of minimum 5 characters length').isLength({ min: 5 })
    ], async (req, res) => {

    // If there are errors return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // If no errors add note
    try {
        const {title, description, tag} = req.body;
        const note = new Notes({
            title,description,tag, user : req.user.id
        })
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
})

//ROUTE 3: Update Note of a User using: PUT "/api/notes/updatenote". Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const {title, description, tag} = req.body;

    // Create a newNote Object
    const newNote = {};

    // Add title,description,tag to newNote object
    if(title){newNote.title = title};
    if(description){newNote.description = description};
    if(tag){newNote.tag = tag};

    // Find note by it's id if not found retrun error
    let note = await Notes.findById(req.params.id);
    if(!note){return res.status(404).send("Not Found")};

    // If correct user is not updating then give error
    if(note.user.toString() !== req.user.id){return res.status(401).send("Not Allowed")};
    
    // Find the note to be updated and update it                         if note is not there then create a new note
    note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new: true});
    res.json({note});
    })

module.exports = router;