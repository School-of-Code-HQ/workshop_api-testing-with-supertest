import app from "./app.js";
const port = 5010;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
