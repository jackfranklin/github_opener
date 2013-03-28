#! /usr/bin/env node


var program = require("commander");

var exec = require("child_process").exec;

var url = "http://github.com/";
var repo = process.argv[2];
if(!repo) {
  console.log("NO REPO SPECIFIED");
  return;
}

program
  .version("0.0.0")
  .option("-i, --issues", "Go to Issues")
  .option("-p, --pull", "Go to pull requests")
  .option("-n, --number <num>", "Go to the issue/pull with this number", parseInt)
  .parse(process.argv);

url += repo;

if(program.issues && !program.number) {
  url += "/issues";
}

if(program.pull && !program.number) {
  url += "/pulls"
}

if(program.number) {
  if(program.pull) {
    url += "/pull";
  }
  if(program.issue) {
    url += "/issues";
  }

  url += "/" + program.number;
}


exec("open " + url, function(err) {
  if(err) throw err;
  console.log("Opened the link. My work here is done.");
  return;
});



