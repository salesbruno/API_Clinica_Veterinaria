import { Request, Response } from "express";

// Model
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TutorModel } from "../models/model-tutor";

// Logger
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Logger from "../../../config/logger";
import { PetModel } from "../../pet/models/model-pet";

export async function createTutor(req: Request, res: Response) {
  try {
    const data = req.body;
    const tutor = await TutorModel.create(data);
    return res.status(201).json(tutor);
  } catch (e: any) {
    Logger.error(`System error: ${e.message}`);
    return res.status(500).json({ error: "Please try again later" });
  }
}

export async function getTutor(req: Request, res: Response) {
  try {
    const tutors = await TutorModel.find({}, null, { populate: "pets" }).exec();

    return res.status(200).json(tutors);
  } catch (e: unknown) {
    return res.status(500).json(e);
  }
}

export async function removeTutor(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const tutor = await TutorModel.findById(id);

    if (!tutor) {
      return res.status(404).json({ error: "The tutor does not exist!" });
    }

    await tutor.deleteOne();

    return res.status(200).json({ msg: "Tutor successfully removed!" });
  } catch (e: any) {
    Logger.error(`System error: ${e.message}`);
    return res.status(500).json({ error: "Please try again later" });
  }
}

export async function updateTutor(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const data = req.body;

    const tutor = await TutorModel.findById(id);

    if (!tutor) {
      return res.status(404).json({ error: "The tutor does not exist!" });
    }

    await TutorModel.updateOne({ _id: id }, data);

    return res.status(200).json(data);
  } catch (e: any) {
    Logger.error(`System error: ${e.message}`);
    return res.status(500).json({ error: "Please try again later" });
  }
}
