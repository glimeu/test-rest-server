import { Router } from "express";

import UsersController from "../controllers/UsersController";

const userRoutes = Router();

userRoutes.post("/users", UsersController.createUser);
userRoutes.get("/users", UsersController.getUsers);
userRoutes.get("/users/:id", UsersController.getUser);
userRoutes.put("/users/:id", UsersController.updateUser);
userRoutes.delete("/users/:id", UsersController.deleteUser);

export { userRoutes };
