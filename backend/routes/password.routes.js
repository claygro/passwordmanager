import express from "express";
import PasswordController from "../controller/password.controller.js";
const passwordController = new PasswordController();
const router = express.Router();
router.post("/add", passwordController.addPassword);
router.delete("/delete/:id", passwordController.deletePassword);
router.put("/edit/:id", passwordController.editPassword);
router.get("/", passwordController.getPassword);
export default router;
