const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    rating:{
        type: String,
        required: true
    },
    usability:{
        type: String,
        required: true
    },
    service:{
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});


UserSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

UserSchema.set('toJSON', {
    virtuals: true
});


module.exports = Feedback = mongoose.model("feedback", UserSchema);
