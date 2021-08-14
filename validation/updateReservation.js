const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateUpdateUserInput(data) {
    let errors = {};
    data.customerName = !isEmpty(data.customerName) ? data.customerName : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    
    if (Validator.isEmpty(data.customerName)) {
        errors.customerName = "First Name field is required";
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
    
};
