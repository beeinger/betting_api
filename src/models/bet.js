const bet = (sequelize, DataTypes) => {
  const Bet = sequelize.define("bet", {
    users: {
      type: DataTypes.ARRAY(DataTypes.BIGINT),
      AllowNull: false
    },
    url: {
      type: DataTypes.STRING,
      AllowNull: false
    }
  });
  Bet.associate = models => {
    Bet.belongsTo(models.Party);
  };
  return Bet;
};
export default bet;
