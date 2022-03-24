const express = require('express')
const moment = require('moment')
const router = express.Router()


router.get('/time', (req, res) => {
    let time = moment().format('LTS');
    try {
        if(time > 9 && time < 17)  {
         res.send("You are welcome ");   
        }else{
            res.send("Sorry we are off today!")
        }
    } catch (error) {
        console.log(error);
    }})

module.exports = router