const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
});

router.post('/', (req, res) => {
});

router.get('/:id', (req, res) => {
    res.send(`GET USER WITH ID ${req.params.id}`)
});

router.route

router.param

module.exports = router