'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
    class CardioExercise extends Model {
        static associate(models) {
            CardioExercise.belongsToMany(models.Tools, { through: sequelize.define('Tools_CardioExcersices', {}, { timestamps: false }) });
            CardioExercise.belongsToMany(models.Muscles, { through: sequelize.define('Muscles_CardioExcersices', {}, { timestamps: false }) });
        }
    }
    CardioExercise.init({
        speed: DataTypes.FLOAT,
        time: DataTypes.FLOAT,
        level: DataTypes.FLOAT
    }, {
        sequelize,
        modelName: 'CardioExercises',
        timestamps: false
    });
    return CardioExercise;
};