'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Muscles', [
            { name: 'Biceps', muscle_group_id: 2 },
            { name: 'Triceps', muscle_group_id: 2 },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Muscles', null, {});
    }
};


