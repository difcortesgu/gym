'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
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
        timestamps: false
    });
    return Set;
};