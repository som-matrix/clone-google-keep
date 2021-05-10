import Keep from "../model/Keeps.js";
export const getPost = async (req, res) => {
  try {
    const keepNotes = await Keep.find();

    res.status(200).json(keepNotes);
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};

export const createPost = (req, res) => {
  const newKeep = new Keep({
    title: req.body.title,
    description: req.body.description,
  });
  newKeep
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json(newKeep);
    })
    .catch((error) => {
      console.log(error);
      res.status(409).json(error);
    });
};
