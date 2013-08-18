/**
 * command.cgi wrapper
 * https://www.flashair-developers.com/ja/documents/api/commandcgi/
 */

var Command = require("./api");

exports = module.exports = Command;

Command.prototype.filelist = function (dirname, done) {
  var that = this;

  if (dirname[0] !== "/") {
    dirname = "/" + dirname;
  }
  if (dirname.length > 1 && dirname[dirname.length - 1] === "/") {
    dirname = dirname.slice(0, -1);
  }

  var dirnameLength = dirname.length + 1;

  this.__request({
    hostname: this.endpoint,
    pathname: "/command.cgi",
    query: {
      op: 100,
      DIR: dirname
    },
  }, function (err, body) {
    var files = body.trim().split("\r\n");
    if (files[0] !== "WLANSD_FILELIST") {
      return done(new Error("wrong protocol"), null);
    }

    files = files.slice(1).map(function (filename) {
      var filePropArr = filename.split(","),
          prop = {};

      prop.time = Number(filePropArr.pop());
      prop.date = Number(filePropArr.pop());
      prop.attr = Number(filePropArr.pop());
      prop.size = Number(filePropArr.pop());

      // filename/dirname format
      prop.name = filePropArr.join(",").slice(dirnameLength);
      prop.path = "http://" + that.endpoint + dirname + "/" + prop.name;

      // time fortam
      var time = [];
      time[0] = prop.time >>> 11;
      // parseInt("0000011111100000", 2) => 2016
      time[1] = (2016 & prop.time) >>> 5;
      // parseInt("0000000000011111", 2) => 31
      time[2] = 31 & prop.time;
      prop.time = time;

      // date format
      var date = [];
      date[0] = (prop.date >>> 9) + 1980;
      // parseInt("0000000111100000", 2) => 480
      date[1] = (480 & prop.date) >>> 5;
      // parseInt("0000000000011111", 2) => 31
      date[2] = 31 & prop.date;
      prop.date = date;

      // attr format
      var attr = {};
      attr.archive = prop.attr >>> 5;
      // parseInt("010000", 2) => 16
      attr.directory = (16 & prop.attr) >>> 4;
      // parseInt("001000", 2) => 8
      attr.volume = (8 & prop.attr) >>> 3;
      // parseInt("000100", 2) => 4
      attr.system = (4 & prop.attr) >>> 2;
      // parseInt("000010", 2) => 2
      attr.hidden = (2 & prop.attr) >>> 1;
      // parseInt("000001", 2) => 1
      attr.readonly = 1 & prop.attr;
      prop.attr = attr;

      return prop;
    });

    done(err, files.slice(1));
  });
};
