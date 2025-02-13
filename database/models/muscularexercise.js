'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
    class MuscularExercise extends Model {
        static associate(models) {
            MuscularExercise.belongsToMany(models.Tools, { through: sequelize.define('Tools_MuscularExercises', {}, { timestamps: false }) });
            MuscularExercise.belongsToMany(models.Muscles, { through: sequelize.define('Muscles_MuscularExercises', {}, { timestamps: false }) });
        }
    }
    MuscularExercise.init({
        name: DataTypes.STRING,
        weight: DataTypes.FLOAT,
        repetitions: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'MuscularExercises',
        timestamps: false
    });
    return MuscularExercise;
};