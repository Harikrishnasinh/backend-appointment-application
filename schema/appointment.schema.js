import mongoose from "mongoose";

const treat = ["Home Visit", "Clinic"];
const custom = ["Never", "Daily", "Weekly", "Monthly", "Yearly", "Custom"];

const treatValidator = (tValue) => {
  return treat.includes(tValue);
};

customDurationValidator = (value) => {
  if (value === "Days") {
    return this.repeatSchema instanceof mongoose.model("CustomDay");
  }
  if (value === "Weeks") {
    return this.repeatSchema instanceof mongoose.model("CustomWeek");
  }
  if (value === "Months") {
    return this.repeatSchema instanceof mongoose.model("CustomMonth");
  }
  if (value === "Years") {
    return this.repeatSchema instanceof mongoose.model("CustomYear");
  }
  return true;
};

const appointmentSchema = mongoose.Schema({
  patient_id: {
    type: mongoose.Schema.ObjectId,
    ref: "Patient",
    required: true,
  },
  toTreat: {
    type: String,
    validate: {
      validator: treatValidator,
      message: "Can't Be Treated",
    },
  },
  from_date: {
    type: Date,
    required: true,
  },
  to_date: {
    type: Date,
    required: true,
  },
  from_time: {
    type: String,
    required: true,
  },
  to_time: {
    type: String,
    required: true,
  },
  repeat: {
    type: String,
    enum: custom,
    validate: {
      validator: customDurationValidator,
      message: "Invalid value for 'repeat'",
    },
  },
  repeatSchema: {
    type: mongoose.Schema.Types.Mixed,
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;

//  --------------------------------------------------- Example Input's ----------------------------------------------------------

// expecting input (custom Days)
// {
//     "patient_id": "somePatientId",
//     "toTreat": "Home Visit",
//     "from_date": "2024-03-01",
//     "to_date": "2024-03-01",
//     "from_time": "10:00 AM",
//     "to_time": "11:00 AM",
//     "repeat": "Days",
//     "repeatSchema": {
//       "frequency": "daily",
//       "every": "1"
//     }
//   }

// expecting input (custom Weeks)
// {
//     "patient_id": "somePatientId",
//     "toTreat": "Clinic",
//     "from_date": "2024-03-01",
//     "to_date": "2024-03-01",
//     "from_time": "2:00 PM",
//     "to_time": "4:00 PM",
//     "repeat": "Weeks",
//     "repeatSchema": {
//       "weekDays": ["Monday", "Wednesday", "Friday"]
//     }
//   }

// expecting input (custom Months)
// {
//     "patient_id": "somePatientId",
//     "toTreat": "Home Visit",
//     "from_date": "2024-03-01",
//     "to_date": "2024-03-01",
//     "from_time": "3:00 PM",
//     "to_time": "5:00 PM",
//     "repeat": "Months",
//     "repeatSchema": {
//       "month": "January"
//     }
//   }

// expecing input (custom Years)
// {
//     "patient_id": "somePatientId",
//     "toTreat": "Clinic",
//     "from_date": "2024-03-01",
//     "to_date": "2024-03-01",
//     "from_time": "4:00 PM",
//     "to_time": "6:00 PM",
//     "repeat": "Years",
//     "repeatSchema": {
//       "year": "2023"
//     }
//   }
