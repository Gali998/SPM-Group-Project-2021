const express = require('express');
const router = express.Router();
const validateRegisterInput = require('../../validation/AddCar');
const validateUpdateUserInput = require('../../validation/updateCar');
const Car = require('../../models/Car');

router.post('/user-add', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    Car.findOne({ carName: req.body.carName }).then(user => {
        if (user) {
            return res.status(400).json({ carName: 'Car Name already exists' });
        } else {
            const newCar = new Car({
                carName: req.body.carName,
                description: req.body.description,
                carCount: req.body.carCount
            });
                newCar
                    .save()
                    .then(user => {
                        return res.status(200).json({message: 'Car added successfully. Refreshing data...'})
                    }).catch(err => console.log(err));
        }
    });
});

router.get('/car-data', (req, res) => {
    Car.find({}).select(['-id']).then(user => {
        if (user) {
            return res.status(200).send(user);
        }
    });
});

router.post('/user-delete', (req, res) => {
    Car.deleteOne({ _id: req.body._id}).then(user => {
        if (user) {
            return res.status(200).json({message: 'Car deleted successfully. Refreshing data...', success: true})
        }
    });
});

router.post('/user-update', (req, res) => {
    const { errors, isValid } = validateUpdateUserInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const _id = req.body._id;
    Car.findOne({ _id }).then(user => {
        if (user) {
            let update = {'carName': req.body.carName, 'description': req.body.description, 'carCount': req.body.carCount};
            Car.updateOne({ _id: _id}, {$set: update}, function(err, result) {
                if (err) {
                    return res.status(400).json({ message: 'Unable to update Car.' });
                } else {
                    return res.status(200).json({ message: 'Car updated successfully. Refreshing data...', success: true });
                }
            });
        } else {
            return res.status(400).json({ message: 'Now Car found to update.' });
        }
    });
});




module.exports = router;
