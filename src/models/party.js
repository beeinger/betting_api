const party = (sequelize, DataTypes) => {
  const Party = sequelize.define("party", {
    name: {
      type: DataTypes.STRING,
      AllowNull: false,
      unique: true,
      validate: {
        len: [3, 15]
      }
    }
  });
  Party.associate = models => {
    Party.hasMany(models.Users);
    Party.hasMany(models.Bet);
  };
  return Party;
};
export default party;
