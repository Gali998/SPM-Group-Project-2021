const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateUpdateUserInput(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.comment = !isEmpty(data.comment) ? data.comment : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = " Name field is required";
  }
  if (Validator.isEmpty(data.comment)) {
    errors.comment = "Please leave a comment";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
