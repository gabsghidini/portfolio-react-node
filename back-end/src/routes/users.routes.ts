import { Router } from "express";
import {
	createUserController,
	deleteUserController,
	getAllUsersController,
	patchUserController,
} from "../controllers";
import {
	validateSchemaMiddleware,
	verifyIfUserAlreadyExistsMiddleware,
	verifyTokenMiddleware,
	verifyIfUserExistsMiddleware,
	verifyForbiddenFieldsMiddleware,
} from "../middlewares";
import { createUserSchema } from "../schemas";

const userRouter = Router();

userRouter.get("", verifyTokenMiddleware, getAllUsersController);

userRouter.post(
	"",
	validateSchemaMiddleware(createUserSchema),
	verifyIfUserAlreadyExistsMiddleware,
	createUserController
);

userRouter.delete(
	"/:id",
	verifyTokenMiddleware,
	verifyIfUserExistsMiddleware,
	deleteUserController
);

userRouter.patch(
	"/:id",
	verifyTokenMiddleware,
	verifyIfUserExistsMiddleware,
	verifyForbiddenFieldsMiddleware,
	patchUserController
);

export default userRouter;
