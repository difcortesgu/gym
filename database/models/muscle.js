'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
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