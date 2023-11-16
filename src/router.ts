import { Router, Request, Response } from "express";
import { createTutor } from "./tutor/controllers/tutorControllers";

// validations
import { validate } from "./middleware/handleValidation";
import { tutorCreateValidation } from "./middleware/tutorValidation";

const router = Router();

export default router
  .get("/tutors", (req: Request, res: Response) => {
    res.status(200).send("API Working");
  })
  .post("/tutor", tutorCreateValidation(), validate, createTutor);
