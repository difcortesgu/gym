'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
    class Execution extends Model {
        static associate(models) {
        }
    }
    Execution.init({
        date: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Executions',
        timestamps: false
    });
    return Execution;
};