const message = (sequelize, DataTypes) => {
  const Message = sequelize.define("message", {
    text: {
      type: DataTypes.STRING,
      AllowNull: false,
      validate: { len: [1, 200] }
    },
    date: DataTypes.DATE
  });
  Message.associate = models => {
    Message.belongsTo(models.User);
  };
  return Message;
};
export default message;
