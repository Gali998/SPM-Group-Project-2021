const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : "";
    data.rating = !isEmpty(data.rating) ? data.rating : "";
    data.usability = !isEmpty(data.usability) ? data.usability : "";
    data.service = !isEmpty(data.service) ? data.service : "";
    data.comment = !isEmpty(data.comment) ? data.comment : "";

    if (Validator.isEmpty(data.name)) {
        errors.name = " Name field is required";
    }
    if (Validator.isEmpty(data.rating)) {
        errors.rating = "Please select one";
    }
    if (Validator.isEmpty(data.usability)) {
        errors.usability = "Please select one";
    }
    if (Validator.isEmpty(data.service)) {
        errors.usability = "Please select one";
    }
    if (Validator.isEmpty(data.comment)) {
        errors.comment = "Please leave a comment";
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
};