const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PaymentSchema = new Schema({
    cardHoldersName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    cardtype: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

PaymentSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

PaymentSchema.set('toJSON', {
    virtuals: true
});


module.exports = Payment = mongoose.model("payment", PaymentSchema);
