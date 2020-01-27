const express = require('express');
const router = express.Router();
const {signup,signin,signout,requireSignin} = require('../controller/auth')

// Validators
const {userSignUpValidator,userSignInValidator} = require('../validators/auth');
const {runvalidation} = require('../validators/index');

router.post("/signup",userSignInValidator,runvalidation,signup);
router.post("/signin",userSignInValidator,runvalidation,signin);
router.get("/signout",signout);

router.get("/secret",requireSignin,(req,res)=>{
    res.send("This is the secret page")
})

module.exports = router;