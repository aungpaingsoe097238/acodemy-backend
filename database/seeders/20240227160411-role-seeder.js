"use strict";

const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          name: "Admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "User",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Developer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Roles", {
      [Op.or]: [{ name: "Developer" }, { name: "Admin" }, { name : "User" }],
    });
  },
};
