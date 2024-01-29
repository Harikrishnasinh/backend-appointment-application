import mongoose from "mongoose";

const gender = ["male", "female"];

const patientSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 1,
  },
  patient_type: {
    type: String,
    required: true,
  },
  assesment_condition_name: {
    type: String,
  },
  primary_address: {
    type: String,
    required: true,
  },
  address_2: {
    type: String,
  },
  whatsapp_mobile_number: {
    type: String,
    minLength: 10,
    maxLength: 20,
    pattern: "^[0-9]{10}$",
  },
  gender: {
    type: String,
    enum: gender,
  },
  age: {
    type: String,
    minlength: 1,
    maxLength: 3,
  },
});

export const Patient = mongoose.model("Patient", patientSchema);

// -----------------------------------------------expected input-----------------------------------------------------

// {
//     name: "John Doe",
//     patient_type: "Regular",
//     assesment_condition_name: "Some Condition",
//     primary_address: "123 Main Street",
//     address_2: "Apt 456",
//     whatsapp_mobile_number: "1234567890",
//     gender: "male",
//     age: "25",
//   }
