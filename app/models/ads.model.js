const moment= require('moment') 
module.exports = (sequelize, DataTypes) => {
  const Ads = sequelize.define("Ads", {
    title: {
      type: DataTypes.STRING,
    },
    para1: {
      type: DataTypes.STRING,
    },

    image1: {
      type: DataTypes.STRING,
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

  return Ads;
};
