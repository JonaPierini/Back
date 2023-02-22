const { Router } = require("express");
const {
  getProducts,
  createProduct,
  createManyProducts,
  deleteProduct,
  updateProduct,
} = require("../controllers/product.controller");
const uploader = require("../../utils/utils");
const route = Router();

route.get("/", async (req, res) => {
  try {
    const products = await getProducts();
    res.render("home", {
      title: "Home",
      style: "index.css",
      products,
    });
  } catch (error) {
    res.send({ status: "error", error: error.message });
  }
});

route.post("/", uploader.single("file"), async (req, res) => {
  try {
    const result = await createProduct(req.body);

    res.send({ status: "success", payload: result });
  } catch (error) {
    res.send({ status: "error", error: error.message });
  }
});
route.post("/createMany", async (req, res) => {
  try {
    const result = await createManyProducts();
    res.send({ status: "success", payload: result });
  } catch (error) {
    res.send({ status: "error", error: error.message });
  }
});

route.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await updateProduct(id, req.body);
    res.send({ status: "success", payload: result });
  } catch (error) {
    res.send({ status: "error", error: error.message });
  }
});

route.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteProduct(id);
    res.send({ status: "success", payload: result });
  } catch (error) {
    res.send({ status: "error", error: error.message });
  }
});

module.exports = route;
