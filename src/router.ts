import { Router } from "express";
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
import {
  createPet,
  removePet,
  updatePet,
} from "./pet/controllers/petControllers";

const router = Router();

export default router
  .post("/tutor", tutorCreateValidation(), validate, createTutor)
  .get("/tutor", getTutor)
  .delete("/tutor/:id", removeTutor)
  .put("/tutor/:id", tutorCreateValidation(), validate, updateTutor)
  .post("/pet/:tutorId", petCreateValidation(), validate, createPet)
  .delete("/pet/:petId/tutor/:tutorId", removePet)
  .put("/pet/:petId/tutor/:tutorId", updatePet);
