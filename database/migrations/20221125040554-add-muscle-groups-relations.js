'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('Muscles', 'muscle_group_id',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'MuscleGroups',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                allowNull: false
            })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('Muscles', 'muscle_group_id')
    }
};
