import { Router } from "express";
import {
	getContactsController,
	createContactController,
	updateContactController,
	deleteContactController,
} from "../controllers";
import {
	verifyTokenMiddleware,
	validateSchemaMiddleware,
} from "../middlewares";
import { createContactSchema, updateContactSchema } from "../schemas";

const contactsRouter = Router();

contactsRouter.get("", verifyTokenMiddleware, getContactsController);

contactsRouter.post(
	"",
	verifyTokenMiddleware,
	validateSchemaMiddleware(createContactSchema),
	createContactController
);

contactsRouter.patch(
	"/:id",
	verifyTokenMiddleware,
	validateSchemaMiddleware(updateContactSchema),
	updateContactController
);

contactsRouter.delete("/:id", verifyTokenMiddleware, deleteContactController);

export default contactsRouter;
