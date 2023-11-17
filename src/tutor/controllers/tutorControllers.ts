import { Request, Response } from "express";

// Logger
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Logger from "../../../config/logger";
import { prisma } from "../../../prisma/prisma";

export async function createTutor(req: Request, res: Response) {
  try {
    const data = req.body;
    const tutor = await prisma.tutor.create({
      data: data,
    });
    return res.status(201).json(tutor);
  } catch (e: any) {
    Logger.error(`System error: ${e.message}`);
    return res.status(500).json({ error: "Please try again later" });
  }
}

export async function getTutor(req: Request, res: Response) {
  try {
    const tutors = await prisma.tutor.findMany({
      include: {
        pets: true,
      },
    });

    return res.status(200).json(tutors);
  } catch (e: unknown) {
    return res.status(500).json(e);
  }
}

export async function removeTutor(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const tutor = await prisma.tutor.delete({
      where: { id: id },
    });

    if (!tutor) {
      return res.status(404).json({ error: "The tutor does not exist!" });
    }

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

    const tutor = await prisma.tutor.findUnique({
      where: { id: id },
    });

    if (!tutor) {
      return res.status(404).json({ error: "The tutor does not exist!" });
    }

    await prisma.tutor.update({
      where: { id: id },
      data: data,
    });

    return res.status(200).json(data);
  } catch (e: any) {
    Logger.error(`System error: ${e.message}`);
    return res.status(500).json({ error: "Please try again later" });
  }
}
