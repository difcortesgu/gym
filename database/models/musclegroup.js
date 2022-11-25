'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
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