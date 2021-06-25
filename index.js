const express = require("express");
const app = express();
const port = process.env.PORT || 8989;

app.get('/', (req, res) => {
  res.send("Game server up and running")
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
