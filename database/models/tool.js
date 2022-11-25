'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Tool extends Model {
        static associate(models) {
            Tool.belongsToMany(models.CardioExercises, { through: sequelize.define('Tools_CardioExcersices', {}, {timestamps: false}) });
            Tool.belongsToMany(models.MuscularExercises, { through: sequelize.define('Tools_MuscularExercises', {}, {timestamps: false}) });
        }
    }
    Tool.init({
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Tools',
        timestamps: false
    });
    return Tool;
};