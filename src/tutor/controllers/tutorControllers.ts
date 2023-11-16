import { Request, Response } from "express";

// Model
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TutorModel } from "../models/model-tutor";

// Logger
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Logger from "../../../config/logger";

export async function createTutor(req: Request, res: Response) {
  try {
    const data = req.body;
    const tutor = await TutorModel.create(data);
    return res.status(201).json(tutor);
  } catch (e: any) {
    Logger.error(`System error: ${e.message}`);
  }
}
