const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const validateRegisterInput = require('../../validation/AddEmployee');
const validateUpdateUserInput = require('../../validation/updateEmployee');
const Employee = require('../../models/Employee');

router.post('/user-add', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    Employee.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: 'Email already exists' });
        } else {
            const newEmployee = new Employee({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                username: req.body.username,
                password: req.body.password
            });
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newEmployee.password, salt, (err, hash) => {
                    if (err) throw err;
                    newEmployee.password = hash;
                    newEmployee
                        .save()
                        .then(user => {
                            return res.status(200).json({message: 'Employee added successfully. Refreshing data...'})
                        }).catch(err => console.log(err));
                });
            });
        }
    });
});

router.post('/user-data', (req, res) => {
    Employee.find({}).select(['-password']).then(user => {
        if (user) {
            return res.status(200).send(user);
        }
    });
});

router.post('/user-delete', (req, res) => {
    Employee.deleteOne({ _id: req.body._id}).then(user => {
        if (user) {
            return res.status(200).json({message: 'Employee deleted successfully. Refreshing data...', success: true})
        }
    });
});

router.post('/user-update', (req, res) => {
    const { errors, isValid } = validateUpdateUserInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const _id = req.body._id;
    Employee.findOne({ _id }).then(user => {
        if (user) {
            if (req.body.password !== '') {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(req.body.password, salt, (err, hash) => {
                        if (err) throw err;
                        user.password = hash;
                    });
                });
            }
            let update = {'firstName': req.body.firstName, 'lastName': req.body.lastName, 'email': req.body.email, 'username': req.body.username, 'password': user.password};
            Employee.updateOne({ _id: _id}, {$set: update}, function(err, result) {
                if (err) {
                    return res.status(400).json({ message: 'Unable to update Employee.' });
                } else {
                    return res.status(200).json({ message: 'Employee updated successfully. Refreshing data...', success: true });
                }
            });
        } else {
            return res.status(400).json({ message: 'Now Employee found to update.' });
        }
    });
});


module.exports = router;
