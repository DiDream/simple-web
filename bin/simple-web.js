#! /usr/bin/env node
'use strict'
var
    spawn = require("child_process").spawn,
    argv = require('yargs').argv,
    options = ["simple-web"];

    if(argv.nopug) options.push("--nopug");
    if(argv.nosass) options.push("--nosass");
    options.push('--path');
    options.push(process.cwd())

    options.push('--cwd');
    options.push( __dirname +'/..');

    options.push('--port');
    options.push(argv.port || 3002);
spawn("gulp", options, {stdio: 'inherit'});
