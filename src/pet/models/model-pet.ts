import mongoose, { model, Schema } from "mongoose";

const petSchema = new Schema({
  idPet: Number,
  name: String,
  species: String,
  carry: String,
  weight: String,
  data_of_birth: String,
  tutorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tutor",
  },
});

export const PetModel = model("Pet", petSchema);
