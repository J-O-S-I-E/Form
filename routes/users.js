const express = require('express');
const router = express.Router();

router.route('/').get((req, res)=>{
    res.send('User List');
}).post((req,res) =>{
    const firstName = req.body.firstName;
    const isValid = firstName !=="";
    if(isValid){
        console.log(`Adding user: ${firstName}`);
        users.push({firstName});
        res.render('users/list',{users});
    }
    else{
        console.log("Error adding a user!");
        res.render("users/new",{firstName:firstName})
    }
});
router.get('/list',(req,res) =>{
    res.render('users/list',{users});
})

router.get('/new', (req, res)=>{
    res.render('users/new',{firstName:"firstName"});
});
//dynamic route
//router.get("/:id",(req,res) =>{
//    res.send(`Getting User Data: ${req.params.id}`); //use back kicks
//})
router.route('/:id').get((req, res)=>{
    console.log(req.user);
    console.log("Getting user!");
    res.send(`Getting User data for id: ${req.user['name']}`);

}).delete((req, res)=>{
    res.send(`Deleting User data for id: ${req.params.id}`);

}).put((req, res)=>{
    res.send(`Updating User data for id: ${req.params.id}`);
});

const users =[{firstName:"George"}, {firstName:"Justyna"}];
router.param("id", (req, res, next, id)=>{
    req.user = users[id];
    console.log("Access attempted by User:",id);
    next();
});

module.exports = router; 