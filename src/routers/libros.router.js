import { Router } from "express";
import {
    deleteLibrosController,    getLibrosController,
    postLibrosController,    putLibrosController,
} from "../controllers/libros.controller.js";
import {
    validateLibrosData,    validateId,    validateUpdates,
} from "../middlewares/validation.js";
import { solo } from "../middlewares/authorization.js";
import passport from "passport";

export const librosRouter = Router();

// Define middleware functions
const authenticateJWT = passport.authenticate("jwt", { failWithError: true, session: false });
const adminAuthorization = solo(["admin"]);

// GET
librosRouter.get("/", getLibrosController);
librosRouter.get("/:id", validateId, getLibrosController);

// POST
librosRouter.post(
    "/",
    authenticateJWT,
    adminAuthorization,
    validateLibrosData,
    postLibrosController
);

// PUT
librosRouter.put(
    "/:id",
    authenticateJWT,
    adminAuthorization,
    validateUpdates,
    putLibrosController
);

// DELETE
librosRouter.delete(
    "/:id",
    authenticateJWT,
    adminAuthorization,
    validateId,
    deleteLibrosController
);
