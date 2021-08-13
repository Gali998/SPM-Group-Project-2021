const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.carName = !isEmpty(data.carName) ? data.carName : "";
    data.description = !isEmpty(data.description) ? data.description : "";
    data.carCount = !isEmpty(data.carCount) ? data.carCount : "";
    
    if (Validator.isEmpty(data.carName)) {
        errors.carName = "Name of the car field is required";
    }
    if (Validator.isEmpty(data.description)) {
        errors.description = "Description about the car field is required";
    }
    if (Validator.isEmpty(data.carCount)) {
        errors.carCount = "Number of the car field is required";
    }
    // if (!Validator.equals(data.password, data.password2)) {
    //     errors.password2 = "Passwords must match";
    // }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};