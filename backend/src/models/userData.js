import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    userLogin: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    group: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      defaut: "View",
    },
  },
  {
    timestamps: true,
  }
);

const User = model("users", UserSchema);

export default User;
