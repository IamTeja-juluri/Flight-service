const {Op}=require('sequelize')
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

       await queryInterface.bulkInsert('Airplanes',[
        {
          modelNumber: 'airbus489',
          capacity:190,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          modelNumber: 'Indigo483',
          capacity:119,
          createdAt:new Date(),
          updatedAt:new Date()
        }
       ])

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Airplanes',
     {
      [Op.or]:
      [
        {modelNumber:'Indigo483'},
        {modelNumber:'airbus489'}
      ]
     })

  }
};
