const config = require("config");

let admin = config.get("adminUser");

// Load User model
const User = require("../models/User");

const createAdminUser = async () => {
  const alreadyUser = await User.findOne({ username: admin.username });
  if (!alreadyUser) {
    const adminUser = new User(admin);
    await adminUser.save();
  }

  console.log("Admin user created");
};

module.exports = createAdminUser;
