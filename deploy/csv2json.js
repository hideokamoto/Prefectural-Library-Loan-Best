var fs = require('fs');
var Iconv = require('iconv').Iconv;
var sjis = new Iconv('SJIS', 'UTF-8//TRANSLIT//IGNORE');
var csv = require("comma-separated-values");
var stdout = process.stdout;

fs.readFile("../H26-Kinan-library-lending-best-100(Children's book).csv", function (err, text) {
  text = sjis.convert(text).toString();
  var result = new csv(text, { header: true }).parse();
  var data = [];
  for (var i=0; i<result.length; i++) {
    var line = result[i];
    var row = {};
    row.rank = line['順位'];
	row.num = line['貸出数'];
	row.isbn = line['ＩＳＢＮ'];
	row.category = line['分類'];
	row.book = line['書誌情報'];
    data.push(row);
  }
  stdout.write(JSON.stringify(data));
});
