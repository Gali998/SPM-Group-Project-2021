const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const admins = require('./routes/api/admins');
const customers = require('./routes/api/customers');
const cars = require('./routes/api/cars');
const users = require('./routes/api/users');
const employees = require('./routes/api/employees');
const feedback = require("./routes/api/feedbacks");
const payment = require("./routes/api/payments");

const reservations = require('./routes/api/reservations');
const cusreservation = require('./routes/api/customerReservations');
const cors = require('cors');

const uuid = require("uuid");

require("./config/passport")(passport);

const app = express();

app.use(cors());
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.listen(9000);

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB successfully connected."))
  .catch((err) => console.log(err));

app.use(passport.initialize());

app.use('/api/admins', admins);
app.use('/api/customers', customers);
app.use('/api/cars', cars);
app.use('/api/reservations', reservations);
app.use('/api/users', users);
app.use('/api/cus-reservation',cusreservation);

app.use("/api/feedbacks", feedback);
app.use("/api/payments", payment);

app.use("/api/users", users);
app.use('/api/employees', employees);

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
