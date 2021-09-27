const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validatePaymentInput(data) {
  let errors = {};
  data.cardHoldersName = !isEmpty(data.cardHoldersName)
    ? data.cardHoldersName
    : "";
  data.cardNumber = !isEmpty(data.cardNumber) ? data.cardNumber : "";
  data.expiryDate = !isEmpty(data.expiryDate) ? data.expiryDate : "";
  data.cvc = !isEmpty(data.cvc) ? data.cvc : "";
  data.amount = !isEmpty(data.amount) ? data.amount : "";
  if (Validator.isEmpty(data.cardHoldersName)) {
    errors.firstName = "Required";
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Required";
  }
  if (Validator.isEmpty(cardNumber)) {
    errors.email = "Required";
  }
  if (Validator.isEmpty(data.expiryDate)) {
    errors.username = "Required";
  }
  if (Validator.isEmpty(data.cvc)) {
    errors.password = "Required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
