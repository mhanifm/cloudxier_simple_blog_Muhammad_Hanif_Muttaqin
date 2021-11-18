'use strict';
const articles = require('./articles.json')
articles.forEach(article => {
  article.createdAt = new Date()
  article.updatedAt = new Date()
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Articles', articles, {})
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Articles', null, {})
  }
};
