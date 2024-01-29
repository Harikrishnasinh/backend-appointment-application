import mongoose from "mongoose";

const doctorSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
  },
  email: {
    type: String,
    pattern: "^\\S+@\\S+\\.\\S+$",
    format: "email",
    minLength: 6,
    maxLength: 127,
  },
  whatsapp_number: {
    type: String,
    minLength: 10,
    maxLength: 20,
    pattern: "^[0-9]{10}$",
  },
  mobile_number_for_otp: {
    type: String,
    minLength: 10,
    maxLength: 20,
    pattern: "^[0-9]{10}$",
  },
  patients: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Patient",
    },
  ],
});
export const Doctor = mongoose.model("Doctor", doctorSchema);

// -----------------------------------------------------expected input ---------------------------------------------------

// no patients...
// {
//   firstname: "John",
//   lastname: "Doe",
//   email: "john.doe@example.com",
//   whatsapp_number: "1234567890",
//   mobile_number_for_otp: "9876543210",
//   patients: [], // Assuming no patients initially
// }

// more than one patients...

// Assuming you have patient documents in the database
// You can retrieve patient IDs and use them in the doctor creation

// Fetching patient IDs (you may fetch these IDs from existing patients in the database)
// const patientIds = ["somePatientId1", "somePatientId2", "somePatientId3"];

// Example input
// {
//   firstname: "John",
//   lastname: "Doe",
//   email: "john.doe@example.com",
//   whatsapp_number: "1234567890",
//   mobile_number_for_otp: "9876543210",
//   patients: patientIds,
// };
