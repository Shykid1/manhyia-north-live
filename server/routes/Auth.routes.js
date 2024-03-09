const authRouter = require("express").Router();
const authController = require("../controllers/Auth.controller");
const { protect } = require("../middlewares/Auth.middleware");

//User Login
authRouter.post("/login", authController.loginUser);

//Create User
authRouter.post("/register/admin", authController.createAdmin);
authRouter.post("/register/agent", protect, authController.createAgent);
authRouter.get("/users", protect, authController.getUsers);
authRouter.get("/admins", protect, authController.getAdmins);
authRouter.get("/agents", protect, authController.getAgents);

module.exports = authRouter;
