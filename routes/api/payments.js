const express = require("express");
const router = express.Router();
const validateRegisterInput = require("../../validation/AddCar");
const validateUpdateUserInput = require("../../validation/updateCar");
const Payment = require("../../models/Payment");

router.post("/payment-add", (req, res) => {
  Payment.findOne({ cardHoldersName: req.body.cardHoldersName }).then(
    (user) => {
      if (user) {
        return res.status(400).json({ cardHoldersName: "Name already exists" });
      } else {
        const newPayment = new Payment({
          cardHoldersName: req.body.cardHoldersName,
          date: req.body.date,
          cardtype: req.body.cardtype,
          amount: req.body.amount,
        });
        newPayment
          .save()
          .then((user) => {
            return res
              .status(200)
              .json({
                message: "Payment added successfully. Refreshing data...",
              });
          })
          .catch((err) => console.log(err));
      }
    }
  );
});

router.get("/payment-data", (req, res) => {
  Payment.find().then((data) => {
    if (data) {
      return res.status(200).send(data);
    }
  });
});

router.post("/user-delete", (req, res) => {
  Car.deleteOne({ _id: req.body._id }).then((user) => {
    if (user) {
      return res
        .status(200)
        .json({
          message: "Car deleted successfully. Refreshing data...",
          success: true,
        });
    }
  });
});

router.post("/user-update", (req, res) => {
  const { errors, isValid } = validateUpdateUserInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const _id = req.body._id;
  Car.findOne({ _id }).then((user) => {
    if (user) {
      let update = {
        carName: req.body.carName,
        description: req.body.description,
        carCount: req.body.carCount,
      };
      Car.updateOne({ _id: _id }, { $set: update }, function (err, result) {
        if (err) {
          return res.status(400).json({ message: "Unable to update Car." });
        } else {
          return res
            .status(200)
            .json({
              message: "Car updated successfully. Refreshing data...",
              success: true,
            });
        }
      });
    } else {
      return res.status(400).json({ message: "Now Car found to update." });
    }
  });
});

module.exports = router;
