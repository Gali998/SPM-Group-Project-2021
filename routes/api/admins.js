const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const validateUpdateUserInput = require("../../validation/updateAdmin");
const Admin = require("../../models/Admin");

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Admin.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newAdmin = new Admin({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newAdmin.password, salt, (err, hash) => {
          if (err) throw err;
          newAdmin.password = hash;
          newAdmin
            .save()
            .then((user) => {
              return res
                .status(200)
                .json({
                  message: "Admin added successfully. Refreshing data...",
                });
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

router.post("/user-add", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Admin.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newAdmin = new Admin({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newAdmin.password, salt, (err, hash) => {
          if (err) throw err;
          newAdmin.password = hash;
          newAdmin
            .save()
            .then((user) => {
              return res
                .status(200)
                .json({
                  message: "Admin added successfully. Refreshing data...",
                });
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

router.post("/user-data", (req, res) => {
  Admin.find({})
    .select(["-password"])
    .then((user) => {
      if (user) {
        return res.status(200).send(user);
      }
    });
});

router.post("/user-delete", (req, res) => {
  Admin.deleteOne({ _id: req.body._id }).then((user) => {
    if (user) {
      return res
        .status(200)
        .json({
          message: "Admin deleted successfully. Refreshing data...",
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
  Admin.findOne({ _id }).then((user) => {
    if (user) {
      if (req.body.password !== "") {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) throw err;
            user.password = hash;
          });
        });
      }
      let update = {
        name: req.body.name,
        email: req.body.email,
        password: user.password,
      };
      Admin.updateOne({ _id: _id }, { $set: update }, function (err, result) {
        if (err) {
          return res.status(400).json({ message: "Unable to update Admin." });
        } else {
          return res
            .status(200)
            .json({
              message: "Admin updated successfully. Refreshing data...",
              success: true,
            });
        }
      });
    } else {
      return res.status(400).json({ message: "Now Admin found to update." });
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  Admin.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(404).json({ email: "Email not found" });
    }
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name,
        };
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res.status(400).json({ password: "Password incorrect" });
      }
    });
  });
});

module.exports = router;
