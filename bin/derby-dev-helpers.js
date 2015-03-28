#!/usr/bin/env node

var program = require('commander')
  , sh = require('shelljs')
  , path = require('path');

var LOCAL_BIN = path.join(__dirname + '/../', 'node_modules/.bin');
var GLOBAL_BIN = path.join(process.env.PWD, 'node_modules/.bin');
var SCRIPTS = path.join(__dirname, 'sh');

program
  .version(require('../package.json').version)
  .option('-j, --jade', 'compile/revert Jade')
  .option('-c, --coffee', 'compile/revert CoffeeScript');

//program
//  .command('test')
//  .description('Test')
//  .action(function() {
//    runScript('test.sh', function() {
//      console.log('Done!');
//    });
//  });

program
  .command('compile')
  .description('Compile project')
  .action(function() {
    if (program.coffee) runScript('compile-coffee.sh');
    if (program.jade) runScript('compile-jade.sh');
  });

program
  .command('revert')
  .description('Revert (remove) compiled files')
  .action(function() {
    if (program.coffee) runScript('revert-coffee.sh');
    if (program.jade) runScript('revert-jade.sh');
  });

program.parse(process.argv);

function runScript(script, cb) {
  script = path.join(__dirname, 'sh', script);
  var cmd = 'bash -s < "' + script + '" ' + [SCRIPTS, LOCAL_BIN, GLOBAL_BIN].join(' ');
  sh.exec(cmd, {silent: false}, cb);
}
