'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Execution extends Model {
        static associate(models) {
        }
    }
    Execution.init({
        date: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Executions',
    });
    return Execution;
};