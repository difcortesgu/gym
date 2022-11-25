'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Muscle extends Model {
        static associate(models) {
            Muscle.belongsToMany(models.CardioExercises, { through: sequelize.define('Muscles_CardioExcersices', {}, {timestamps: false}) });
            Muscle.belongsToMany(models.MuscularExercises, { through: sequelize.define('Muscles_MuscularExercises', {}, {timestamps: false}) });
        }
    }
    Muscle.init({
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Muscles',
        timestamps: false
    });
    return Muscle;
};