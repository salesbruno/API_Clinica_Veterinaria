import { Router, Request, Response } from "express";
import {
  createTutor,
  getTutor,
  removeTutor,
  updateTutor,
} from "./tutor/controllers/tutorControllers";

// validations
import { validate } from "./middleware/handleValidation";
import { tutorCreateValidation } from "./middleware/tutorValidation";
import { petCreateValidation } from "./middleware/petValidation";
import { createPet } from "./pet/controllers/petControllers";

const router = Router();

export default router
  .post("/tutor", tutorCreateValidation(), validate, createTutor)
  .get("/tutor", getTutor)
  .delete("/tutor/:id", removeTutor)
  .put("/tutor/:id", tutorCreateValidation(), validate, updateTutor)
  .post("/pet/:tutorId", petCreateValidation(), validate, createPet);
