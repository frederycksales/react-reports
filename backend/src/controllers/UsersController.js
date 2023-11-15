import { genSalt, hash, compare } from "bcrypt";
import Users from "../models/userData.js";
import jwt from "jsonwebtoken";

export async function registerUser(req, res) {
  try {
    const { firstName, lastName, userLogin, password, group, role } = req.body;

    const salt = await genSalt();
    const passwordHash = await hash(password, salt);

    const userCreated = await Users.create({
      firstName,
      lastName,
      userLogin,
      password: passwordHash,
      group,
      role,
    });
    console.log("Novo usuário criado");
    return res.status(201).json(userCreated);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error.message);
  }
}

export async function login(req, res) {
  try {
    const { userLogin, password } = req.body;
    const user = await Users.findOne({ userLogin: userLogin });
    console.log(user);
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    const passMatch = await compare(password, user.password);

    if (!passMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
