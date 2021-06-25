const express = require("express");
const app = express();
const port = process.env.port || 8989;

app.get('/', (req, res) => {
  res.send("Server Running")
})

app.listen(8989, () => {
  console.log(`Server started on port ${port}`)
})
