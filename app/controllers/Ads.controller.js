const db = require("../models");
const Ads = db.ads;
const upload = require("../middleware/uploadArray");

exports.createAdd = async (req, res) => {
  await upload(req, res);

  if (req.files == undefined) {
    return res.status(400).send({ message: "Please upload a file!" });
  }
  const photo = {
    image1: req.files.image1[0].filename,
    para1: req.body.para1,
    title: req.body.title,
  };

  // Save Tutorial in the database
  Ads.create(photo)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

exports.findPostById = (req, res) => {
  const postId = req.params.postId;

  return Ads.findByPk(postId, {})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

exports.findAll = (req, res) => {
  return Ads.findAll({}).then((package) => {
    console.log(">> All tutorials", JSON.stringify(package, null, 2));
    res.send(package);
    // console.log(package);
    // return package;
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Ads.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id,
      });
    });
};
