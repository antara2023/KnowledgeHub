import { Schema, model } from "mongoose";

const courseSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    instructor: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    enrollmentStatus: {
      type: String,
      enum: ["Open", "Closed", "InProgress"],
    },
    thumbnail: {
      type: String,
    },
    duration: {
      type: String,
    },
    schedule: {
      type: String,
    },
    location: {
      type: String,
    },
    prerequisites: {
      type: Array,
    },
    syllabus: {
      type: [{
        week: {
            type: Number
        },
        topic: {
            type: String
        },
        content: {
            type: String
        }
    }],
      required: true,
    },
    students: {
      type: [{
        id: {
            type: Number
        },
        name: {
            type: String
        },
        email: {
            type: String
        }
    }],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Course = model("course", courseSchema);
export default Course;
