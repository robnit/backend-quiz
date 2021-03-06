const router = require('express').Router();
const Rave = require('../models/rave');

router 
    .post('/', (req, res, next) => {
        new Rave(req.body).save()
            .then(posted => res.json(posted))
            .catch(next);
    })

    .get('/', (req, res, next) => {
        return Rave.find()
            .populate({ path: 'pet', select: 'name type' })
            .then( found => {
                return res.json(found);
            })
            .catch(next);
    });

module.exports = router;