'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('MuscleGroups', [
            { name: 'Pecho' },
            { name: 'Brazos' },
            { name: 'Espalda' },
            { name: 'Piernas' },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('MuscleGroups', null, {});
    }
};


