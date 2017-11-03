var express = require('express');
var request = require('request');

var app = express();

var data;

app.use(express.static('./'));


var url = 'http://www.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=6&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1';


app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "product_list_page.html" );
})


request({
    url: url,
    json: true
	}, function (error, response, body) {

	    if (!error && response.statusCode === 200) {
	        data = body;
	    }
	});


app.get('/data', function (req, res) {
   res.send(data);
})




var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://127.0.0.1:%s", port)
})