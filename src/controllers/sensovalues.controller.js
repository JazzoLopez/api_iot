const sensovaluesDAO = require('../dao/sensovalues.dao');

const sensovaluesController = {}

sensovaluesController.insertOne = async (req, res) => {
    sensovaluesDAO.insertOne(req.body)
    .then(result => {
        res.redirect('/api/getAllFront')
    })
    .catch(err => {
        res.json({
            status: "Request failed",
            message:err
        })
        console.log(err)
    })
}
sensovaluesController.getAll = async (req, res) => {
    sensovaluesDAO.getAll()
    .then(sensovalues => {
        res.json({sensovalues})
    })
    .catch(err => {
        res.json({
            status:"Request failed",
            msg :err
        })
    });
}

sensovaluesController.getAllFront = async (req, res) => {
    sensovaluesDAO.getAll()
    .then(sensovalues => {
        res.render('../src/views/index_sensor',{sensovalues})
    })
    .catch(err => {
        res.json({
            status:"Request failed",
            msg:err
        })
    });
}


module.exports = sensovaluesController;