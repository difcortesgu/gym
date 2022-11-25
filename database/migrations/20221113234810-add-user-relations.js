'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('UserDetails', 'user_id',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                allowNull: false
            })
        await queryInterface.addColumn('Routines', 'user_id',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                allowNull: false
            })
        await queryInterface.addColumn('Executions', 'user_id',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                allowNull: false
            })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('UserDetails', 'user_id')
        await queryInterface.removeColumn('Routines', 'user_id')
        await queryInterface.removeColumn('Executions', 'user_id')
    }
};
