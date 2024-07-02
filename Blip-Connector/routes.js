const { Router } = require("express");
const ProcessMessage = require("./src/scripts/processMessage")

const router = Router();

router.post("/save", (request, response) => {
  response.status(200).send({ message: "save" });
});

router.post("/publish", (request, response) => {
  response.status(200).send({ message: "publish" });
});

router.post("/validate", (request, response) => {
  response.status(200).send({ message: "validate" });
});

router.post("/execute", ProcessMessage.processMessage);

router.post("/stop", (request, response) => {
  response.status(200).send({ message: "stop" });
});

module.exports = router;