'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.hasMany(models.Executions)
            User.hasOne(models.UserDetails)
            User.hasMany(models.Routines)
        }
    }
    User.init({
        password: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Users',
        timestamps: false
    });
    return User;
};