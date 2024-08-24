const usersModel = require("../Models/usersModel");
const getDashboard = async (req, res) => {
  try {
    // Ensure userId is properly declared
    const userId = req.body.id;

    // Fetch user data excluding the password field
    const userData = await usersModel.findById(userId).select("-password");

    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Send the user data in the response
    res.json({ success: true, userData });

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports =  {getDashboard} ;

