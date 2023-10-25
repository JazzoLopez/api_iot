const {Schema, model} = require('mongoose');

const sensovaluesSchema = new Schema({
    humidity:Number,
    temperatureC:Number,
    temperatureF:Number,
    heatindexC:Number,
    heatindexF:Number

},{
    versionKey:false,
    timestamps:true
})

module.exports = model('sensovalues', sensovaluesSchema);