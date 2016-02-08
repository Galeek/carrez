// console.log("Bonjour, Monde");

// console.log(Number(process.argv[2]) + Number(process.argv[3]) + Number(process.argv[4]));

/*
var http = require('http'),
    url = process.argv[2],
    result = '';
 
http.get(url, function (res) {
    res.on('data', function (data) {
        result += data.toString();
		result += "\n";
    });
    res.on('end', function (data) {
        // console.log(result.length);
        console.log(result);
    });
});
*/

var http = require('http');
var result = '';
var div;
var prix;
var prixlbc;
var prixlbcfinal;
var city;
var citylbc;
var postcode;
var postcodelbc;
var postcodelbcfinal;
var kind;
var kindlbc;
var piece;
var piecelbc;
var piecelbcfinal;
var surface;
var surfacelbc;
var surfacelbcfinal;

http.get("http://www.leboncoin.fr/ventes_immobilieres/915700197.htm?ca=12_s", function (res) {
	res.on('data', function (data) {
		// div = document.querySelectorAll('input[type=text/javascript]');
		result += data.toString();
		//result += "\n";
		// prix = data.indexOf("prix :");
		// //console.log(prix);
		// if (prix != -1)
		// {		
			// prixlbc = data.toString().substr(prix, 15);
			// //console.log(prixlbc);
			// prixlbcfinal = /([0-9]+)/.exec(prixlbc);
			// //console.log(prixlbcfinal[0]);
		// }

	});
	res.on('end', function (data) {
		//console.log(result);
		// console.log(prix);
		//	console.log(prixlbcfinal[0]);
		prix = result.indexOf("prix :");
		//console.log(prix);
		if (prix != -1)
		{		
			prixlbc = result.toString().substr(prix, 15);
			//console.log(prixlbc);
			prixlbcfinal = /([0-9]+)/.exec(prixlbc);
			//console.log(prixlbcfinal[0]);
		}
		
		city = result.indexOf("city :");
		//console.log(city);
		citylbc = result.toString().substr(city + 8, 16);
		//console.log(citylbc);
		
		postcode = result.indexOf("cp :");
		//console.log(postcode);
		
		if (postcode != -1)
		{		
			postcodelbc = result.toString().substr(postcode, 12);
			//console.log(postcodelbc);
			postcodelbcfinal = /([0-9]+)/.exec(postcodelbc);
			//console.log(postcodelbcfinal[0]);
		}
		
		kind = result.indexOf("type :", 4500);
		//console.log(kind);
		kindlbc = result.toString().substr(kind + 8, 11);
		//console.log(kindlbc);
		
		piece = result.indexOf("pieces :");
		//console.log(piece);
		
		if (piece != -1)
		{		
			piecelbc = result.toString().substr(piece, 12);
			//console.log(piecelbc);
			piecelbcfinal = /([0-9]+)/.exec(piecelbc);
			//console.log(piecelbcfinal[0]);
		}
		
		surface = result.indexOf("surface :");
		//console.log(surface);
		
		if (surface != -1)
		{		
			surfacelbc = result.toString().substr(surface, 15);
			//console.log(surfacelbc);
			surfacelbcfinal = /([0-9]+)/.exec(surfacelbc);
			//console.log(surfacelbcfinal[0]);
		}

	});
});

//var jsonleboncoin = require('./leboncoin');

console.log("At the moment, I just succeed to get the values of the different properties of Le Bon Coin from the html page and to display them.");