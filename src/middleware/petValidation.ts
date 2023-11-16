import { body } from "express-validator";

export const petCreateValidation = () => {
  return [
    body("name").isString().withMessage("The name is mandatory"),
    body("species").isString().withMessage("The species is mandatory"),
  ];
};
