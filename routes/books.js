const express=require("express");

const router=express.Router();

//get/books

router.get('/books',(req,res)=>{
    console.log("Fetching all books");
    res.send("Here is the list of books!");
});

//post/books
router.post('/books',(req,res)=>{
    console.log(req.body);
    res.send("Book has been added!");
});

module.exports = router;