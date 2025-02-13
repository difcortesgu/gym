'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
    class UserDetail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    UserDetail.init({
        name: DataTypes.STRING,
        height: DataTypes.FLOAT,
        weight: DataTypes.FLOAT,
        bmi: DataTypes.FLOAT
    }, {
        sequelize,
        modelName: 'UserDetails',
        timestamps: false
    });
    return UserDetail;
};