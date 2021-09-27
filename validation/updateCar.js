const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateUpdateUserInput(data) {
  let errors = {};
  data.carName = !isEmpty(data.carName) ? data.carName : "";
  data.description = !isEmpty(data.description) ? data.description : "";

  if (Validator.isEmpty(data.carName)) {
    errors.carName = "Name of the car field is required";
  }
  if (Validator.isEmpty(data.description)) {
    errors.description = "Description about the car field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
