const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/', (req,res) => {
    axios({
        method: 'GET',
        url: `http://api.giphy.com/v1/gifs/random?api_key=${process.env.giphy_api_key}`
    })
    .then((response)=>{
        // Use the response from giphy
        console.log(response);
        res.send(response.data.data)
    })
    .catch((error) => {
        res.sendStatus(500)
    })
})

module.exports = router;