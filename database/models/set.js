'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Set extends Model {
        static associate(models) {
            Set.hasMany(models.MuscularExercises)
            Set.hasMany(models.CardioExercises)
        }
    }
    Set.init({
        number: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Sets',
    });
    return Set;
};