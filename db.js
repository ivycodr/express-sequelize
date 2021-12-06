const {Sequelize, DataTypes, Model} = require('sequelize');

const sequelizedb = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './express-restaurants.sqlite',
    logging: false
});

 module.exports={sequelizedb, DataTypes, Model};