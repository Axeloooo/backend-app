import express from "express";

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
