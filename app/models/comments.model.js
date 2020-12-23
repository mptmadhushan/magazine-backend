module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("comment", {
    name: {
      type: DataTypes.STRING,
    },
    id_p: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      primaryKey: true,
    },
    comment: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  });

  return Comments;
};
