const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    customerName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    packageName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    currentDate: {
        type: Date,
        default: Date.now
    } 
});

UserSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

UserSchema.set('toJSON', {
    virtuals: true
});

module.exports = Reservation = mongoose.model("reservation", UserSchema);
