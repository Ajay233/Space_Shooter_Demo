const express = require("express");
const compression = require("compression");
const app = express();
const port = process.env.PORT || 8989;

app.use(compression())
app.use(express.static(__dirname + '/game/'))
// app.get('/', (req, res) => {
//   res.send(__dirname + '/game/index.html')
// })

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
