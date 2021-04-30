import { Keep } from "../model/Keeps.js";
export const getPost = async (req, res) => {
  try {
    const keepNotes = await Keep.find();

    res.status(200).send(keepNotes);
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const keep = req.body;

  const newKeep = new Keep(keep);

  try {
    await newKeep.save();

    res.status(200).send(newKeep);
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};
