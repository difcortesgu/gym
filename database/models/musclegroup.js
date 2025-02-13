'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
    class MuscleGroup extends Model {
        static associate(models) {
            MuscleGroup.hasMany(models.Muscles)
        }
    }
    MuscleGroup.init({
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'MuscleGroups',
        timestamps: false
    });
    return MuscleGroup;
};