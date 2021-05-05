import Keep from "../model/Keeps.js";
export const getPost = async (req, res) => {
  try {
    const keepNotes = await Keep.find();

    res.status(200).json(keepNotes);
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const { title, description, selectedFile } = req.body;

  const newKeep = new Keep({ title, description, selectedFile });
  console.log(title, description, selectedFile);
  try {
    await newKeep.save();

    res.status(200).json(newKeep);
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};
