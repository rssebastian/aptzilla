module.exports = function(sequelize, DataTypes) {
  var Apartment = sequelize.define("Apartment", {
    address: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER
    },
    bedroom: {
      type: DataTypes.INTEGER
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    }, 
    zip: {
      type: DataTypes.INTEGER
    },
    lat: {
      type: DataTypes.INTEGER
    },
    longitude: {
      type: DataTypes.INTEGER
    },
    image_url: {
      type: DataTypes.STRING
    }
  });
  return Apartment;
};