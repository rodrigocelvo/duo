import express from "express";

const app = express();

app.get("/ads", (req, res) => {
  return res.send("Acessosu");
});

app.listen(3333);
