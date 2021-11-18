'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Article.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Title is required'},
        notNull: {msg: 'Title is required'}
      }
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Author is required'},
        notNull: {msg: 'Author is required'}
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Description is required'},
        notNull: {msg: 'Description is required'}
      }
    },
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};