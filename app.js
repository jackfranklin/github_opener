#! /usr/bin/env node

var router = require("cli_router");
var exec = require("child_process").exec;

var url = "http://github.com/";
var repo = process.argv[2];
if(!repo) {
  console.log("NO REPO SPECIFIED");
  return;
}

url += repo;

router.match("-i <num>", function(params) {
  url += "/issues/" + params.num;
  openUrl();
});

router.match("-p <num>", function(params) {
  url += "/pull/" + params.num;
  openUrl();
});

router.match("-i", function(params) {
  url += "/issues/";
  openUrl();
});

router.match("-p", function(params) {
  url += "/pulls/";
  openUrl();
});

router.match("*", openUrl);

function openUrl() {
  exec("open " + url, function(err) {
    if(err) throw err;
    console.log("Opened the link. My work here is done.");
  });
}

router.process(process.argv.slice(3).join(" "));



