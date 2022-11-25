'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Muscles_CardioExcercises', {
            cardio_exercise_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'CardioExercises',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                allowNull: false
            },
            tool_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Muscles',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                allowNull: false
            },
        });

        await queryInterface.createTable('Muscles_MuscularExcercises', {
            cardio_exercise_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'MuscularExercises',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                allowNull: false
            },
            tool_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Muscles',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                allowNull: false
            },
        });

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Muscles_CardioExcercises');
        await queryInterface.dropTable('Muscles_MuscularExcercises');
    }
};
