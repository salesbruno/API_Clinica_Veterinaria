import { body } from "express-validator";

export const tutorCreateValidation = () => {
  return [
    body("name").isString().withMessage("The name is mandatory"),
    body("phone").isString().withMessage("The phone is mandatory"),
  ];
};
