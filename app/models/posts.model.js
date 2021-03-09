const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
    },
    para1: {
      type: DataTypes.STRING,
    },
    short_para: {
      type: DataTypes.STRING,
    },
    para2: {
      type: DataTypes.STRING,
    },
    para3: {
      type: DataTypes.STRING,
    },
    image1: {
      type: DataTypes.STRING,
    },
    image2: {
      type: DataTypes.STRING,
    },
    advertisement: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
    trend: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
      //note here this is the guy that you are looking for
      get() {
        return moment(this.getDataValue("createdAt")).format(
          "DD/MM/YYYY h:mm:ss"
        );
      },
    },
    updatedAt: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue("updatedAt")).format(
          "DD/MM/YYYY h:mm:ss"
        );
      },
    },
  });

  return Post;
};
