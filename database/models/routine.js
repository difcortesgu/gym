'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Routine extends Model {
        static associate(models) {
            Routine.hasMany(models.Executions)
            Routine.hasMany(models.Sets)
        }
    }
    Routine.init({
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Routines',
    });
    return Routine;
};