import { model, Schema } from "mongoose";

const tutorSchema = new Schema({
  idTutor: Number,
  name: String,
  phone: String,
  email: String,
  data_of_birth: String,
  zipCode: String,

  pets: [{type: Schema.Types.ObjectId, ref: 'Pet'}]
});

export const TutorModel = model("Tutor", tutorSchema);
