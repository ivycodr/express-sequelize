const { sequelizedb,DataTypes, Model } = require('./db.js');


class Restaurant extends Model {

    // add methods here

}
Restaurant.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
}, {
    sequelize : sequelizedb,
    timestamps: false,
});

module.exports = {
    Restaurant
};