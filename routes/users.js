const express = require('express');
const router = express.Router();

router.route('/').get((req, res)=>{
    res.send('User List');
}).post((req,res) =>{
    const firstName = req.body.firstName;
    const lastName =req.body.lastName;
    const age= req.body.firstName;
    const gender = req.body.age;
    
    const isValid = firstName !=="" 
                    && lastName !==""
                    && gender
                    && age;

    if(isValid){
        console.log(`Adding user: ${firstName} ${lastName}`);
        users.push({
            firstName,
            lastName,
            age
        });
        res.render('users/list',{users});
    }
    else{
        console.log("Error adding a user!");
        res.render("users/new",{
            firstName:firstName,
            lastName:lastName,
            gender,
            age:Number(age)
        })
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
    res.render('users/user', {user:req.user, id:req.params.id});

}).delete((req, res)=>{
    res.send(`Deleting User data for id: ${req.params.id}`);

}).put((req, res)=>{
    res.send(`Updating User data for id: ${req.params.id}`);
});

const users =[
    { firstName: "Wendy", lastName: "Washington", gender: "male", age: 67 },
    { firstName: "John", lastName: "Kowalski", gender: "female", age: 30 }
];

router.param("id", (req, res, next, id)=>{
    req.user = users[id];
    console.log("Access attempted by User:",id);
    next();
});

module.exports = router; 