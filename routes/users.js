const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('User List');
});

router.get('/new', (req, res)=>{
    res.send('User New Form');
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

const users =[{name:"George"}, {name:"Justyna"}];
router.param("id", (req, res, next, id)=>{
    req.user = users[id];
    console.log("Access attempted by User:",id);
    next();
});

module.exports = router; 