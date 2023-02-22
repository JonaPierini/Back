const { Router } = require("express");
const route = Router();

route.get("/", async (req, res) => {
  try {
    res.render("chat", {
      style: "index.css",
      title: "Chat",
    });
  } catch (error) {
    res.send({ status: "error", error: error.message });
  }
});
route.post("/", async (req, res) => {
  try {
    await require("../socket").addMessages(req.body);
    res.send({ status: "success", payload: "Message Added" });
  } catch (error) {
    res.send({ status: "error", error: error.message });
  }
});

module.exports = route;
