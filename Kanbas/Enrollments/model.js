import mongoose from "mongoose";
import enrollmentSchema from "./schema.js";

// Check if model already exists; otherwise, define it
const EnrollmentModel = mongoose.models.EnrollmentModel || mongoose.model("EnrollmentModel", enrollmentSchema);

export default EnrollmentModel;
