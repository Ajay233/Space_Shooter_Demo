const express = require("express");
const app = express();
const port = process.env.PORT || 8989;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/game/index.html')
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
