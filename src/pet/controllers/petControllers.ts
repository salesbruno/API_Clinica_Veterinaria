import { Request, Response } from "express";

// Model
// eslint-disable-next-line @typescript-eslint/no-unused-vars

// Logger
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Logger from "../../../config/logger";
import { PetModel } from "../models/model-pet";

export async function createPet(req: Request, res: Response) {
  try {
    const data = req.body;
    const tutorId = req.params.tutorId;
    const pet = await PetModel.create({
      ...data,
      tutorId: tutorId,
    });
    return res.status(201).json(pet);
  } catch (e: any) {
    Logger.error(`System error: ${e.message}`);
    return res.status(500).json({ error: "Please try again later" });
  }
}

export async function removePet(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const pet = await PetModel.findById(id);

    if (!pet) {
      return res.status(404).json({ error: "The pet does not exist!" });
    }

    await pet.deleteOne();

    return res.status(200).json({ msg: "Pet successfully removed!" });
  } catch (e: any) {
    Logger.error(`System error: ${e.message}`);
    return res.status(500).json({ error: "Please try again later" });
  }
}

export async function updatePet(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const data = req.body;

    const pet = await PetModel.findById(id);

    if (!pet) {
      return res.status(404).json({ error: "The pet does not exist!" });
    }

    await PetModel.updateOne({ _id: id }, data);

    return res.status(200).json(data);
  } catch (e: any) {
    Logger.error(`System error: ${e.message}`);
    return res.status(500).json({ error: "Please try again later" });
  }
}
