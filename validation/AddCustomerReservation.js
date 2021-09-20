const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.customerName = !isEmpty(data.customerName) ? data.customerName : "";
    data.address = !isEmpty(data.address) ? data.address : "";
    data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.packageName = !isEmpty(data.packageName) ? data.packageName : "";
    data.location = !isEmpty(data.location) ? data.location : "";
    data.date = !isEmpty(data.date) ? data.date : "";
    if (Validator.isEmpty(data.customerName)) {
        errors.customerName = "Customer Name field is required";
    }
    if (Validator.isEmpty(data.address)) {
        errors.address = "Last Name field is required";
    }
    if (Validator.isEmpty(data.phoneNumber)) {
        errors.phoneNumber = "Phone number field is required";
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    if (Validator.isEmpty(data.packageName)) {
        errors.packageName = "Package Name field is required";
    }
    if (Validator.isEmpty(data.location)) {
        errors.location = "Location field is required";
    }
    if (Validator.isEmpty(data.packageName)) {
        errors.packageName = "Package Name field is required";
    }
    if (Validator.isEmpty(data.date)) {
        errors.date = "Date field is required";
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
};