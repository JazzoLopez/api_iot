const Sensovalues = require ('../models/sensovalues.model');
const sensovaluesDAO = {};

sensovaluesDAO.getAll = async () => {
    const sensors = await  Sensovalues.find();
    return sensors
}

sensovaluesDAO.insertOne = async (sensovalues) =>{
    const sensovaluesSaved = new Sensovalues(sensovalues);
    await sensovaluesSaved.save();
    return "Data saved"
}


module.exports = sensovaluesDAO;