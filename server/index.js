var app = require('express')(),
    sellerData = require('./data/sellerData.js').sellerData;
app.get('/', function(req, res) {
  res.json(sellerData);
});

app.listen(5000, function() {
  console.log('app listening at port 5000');
});
