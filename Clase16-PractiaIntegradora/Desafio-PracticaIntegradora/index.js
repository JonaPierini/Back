const { httpServer } = require("./src/socket");

const PORT = process.env.PORT || 8080;

const app = httpServer.listen(PORT, () => {
  console.log(`Server listening in port:${app.address().port}`);
  console.log(`http://localhost:${app.address().port}/`);
});
app.on("error", (error) => console.log(error));
