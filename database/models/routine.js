'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
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
        timestamps: false
    });
    return Routine;
};