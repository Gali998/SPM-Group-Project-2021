const express = require("express");
const router = express.Router();
const validateRegisterInput = require("../../validation/AddReservation");
const validateUpdateUserInput = require("../../validation/updateReservation");
const Reservation = require("../../models/Reservation");

router.post("/user-add", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Reservation.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newReservation = new Reservation({
        customerName: req.body.customerName,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        packageName: req.body.packageName,
        location: req.body.location,
        date: req.body.date,
      });
      newReservation
        .save()
        .then((user) => {
          return res
            .status(200)
            .json({
              message: "Reservation added successfully. Refreshing data...",
            });
        })
        .catch((err) => console.log(err));
    }
  });
});

router.post("/reservation-data", (req, res) => {
  Reservation.find({})
    .select(["-id"])
    .then((user) => {
      if (user) {
        return res.status(200).send(user);
      }
    });
});

router.post("/user-delete", (req, res) => {
  Reservation.deleteOne({ _id: req.body._id }).then((user) => {
    if (user) {
      return res
        .status(200)
        .json({
          message: "Reservation deleted successfully. Refreshing data...",
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
  Reservation.findOne({ _id }).then((user) => {
    if (user) {
      let update = {
        customerName: req.body.customerName,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        packageName: req.body.packageName,
        location: req.body.location,
        date: req.body.date,
      };
      Reservation.updateOne(
        { _id: _id },
        { $set: update },
        function (err, result) {
          if (err) {
            return res
              .status(400)
              .json({ message: "Unable to update Reservation." });
          } else {
            return res
              .status(200)
              .json({
                message: "Reservation updated successfully. Refreshing data...",
                success: true,
              });
          }
        }
      );
    } else {
      return res
        .status(400)
        .json({ message: "Now Reservation found to update." });
    }
  });
});

module.exports = router;
