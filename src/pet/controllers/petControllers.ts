import { Request, Response } from "express";

// Logger
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Logger from "../../../config/logger";
import { prisma } from "../../../prisma/prisma";

export async function createPet(req: Request, res: Response) {
  try {
    const data = req.body;
    const tutorId = req.params.tutorId;
    const pet = await prisma.pet.create({
      data: {
        ...data,
        tutorId,
      },
    });
    return res.status(201).json(pet);
  } catch (e: any) {
    Logger.error(`System error: ${e.message}`);
    return res.status(500).json({ error: "Please try again later" });
  }
}

export async function removePet(req: Request, res: Response) {
  try {
    const { petId, tutorId } = req.params;
    const pet = await prisma.pet.delete({
      where: {
        id: petId,
        tutorId,
      },
    });

    if (!pet) {
      return res.status(404).json({ error: "The pet does not exist!" });
    }

    return res.status(200).json({ msg: "Pet successfully removed!" });
  } catch (e: any) {
    Logger.error(`System error: ${e.message}`);
    return res.status(500).json({ error: "Please try again later" });
  }
}

export async function updatePet(req: Request, res: Response) {
  try {
    const { petId, tutorId } = req.params;
    const data = req.body;

    const pet = await prisma.pet.update({
      where: {
        id: petId,
        tutorId,
      },
      data: data
    });

    if (!pet) {
      return res.status(404).json({ error: "The pet does not exist!" });
    }

 

    return res.status(200).json(data);
  } catch (e: any) {
    Logger.error(`System error: ${e.message}`);
    return res.status(500).json({ error: "Please try again later" });
  }
}
