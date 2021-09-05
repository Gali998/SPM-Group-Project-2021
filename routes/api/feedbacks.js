const express = require('express');
const router = express.Router();
const validateRegisterInput = require('../../validation/AddFeedback');
const validateUpdateUserInput = require('../../validation/updateFeedback');
const Feedback = require('../../models/Feedback');

router.post('/feedback-add', (req, res) => {
      const { errors, isValid } = validateRegisterInput(req.body);
      if (!isValid) {
          return res.status(400).json(errors);
      }
     Feedback.findOne({ name: req.body.name }).then(user => {
         if (user) {
             return res.status(400).json({ name: 'Name already exists' });
     } else {
            const newFeedback = new Feedback({
                name: req.body.name,
                rating: req.body.rating,
                usability: req.body.usability,
                service: req.body.service,
                comment: req.body.comment,
                
            });
                newFeedback
                    .save()
                    .then(user => {
                        return res.status(200).json({user:user.id,message: 'Feedback added successfully. Refreshing data...'})
                    })
                    .catch(err => console.log(err));
         }
     }
    );
});

// router.get('/feedback-data', (req, res) => {
//     Feedback.findById().then(data => {
//         if (data) {
//             return res.status(200).send(data);
//         }
//     });
// });

// router.get('/feedback-data', (req, res) => {
//     Customer.find({}).select(['-id']).then(user => {
//         if (user) {
//             return res.status(200).send(user);
//         }
//     });
// });



router.get('/feedback-data/:id', (req, res) => {
    Feedback.findById(req.params.id).then(data => {
        if (data) {
            return res.status(200).send(data);
        }
    });
});

// router.post('/feedback-delete', (req, res) => {
//     Feedback.deleteOne({ _id: req.body._id}).then(data => {
//         if (data) {
//             return res.status(200).json({message: 'Feedback deleted successfully.', success: true})
//         }
//     });
// });

router.post('/feedback-edit', (req, res) => {
    const { errors, isValid } = validateUpdateUserInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const _id = req.body._id;
    Feedback.findOne({ _id }).then(data => {
        if (data) {
            let update = {
                'name': req.body.name,
                'rating': req.body.rating,
                'usability': req.body.usability,
                'service': req.body.service,
                'comment': req.body.comment,
            };
            Feedback.updateOne({ _id: _id}, {$set: update}, function(err, result) {
                if (err) {
                    return res.status(400).json({ message: 'Unable to update Feedback.' });
                } else {
                    return res.status(200).json({ message: 'Feedback updated successfully.', success: true });
                }
            });
        } else {
            return res.status(400).json({ message: 'No Feedback found to update.' });
        }
    });
});

module.exports = router;
