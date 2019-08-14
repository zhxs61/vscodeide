#!/usr/bin/env node
const {app,BrowserWindow}= require('electron');


function createWindow(){
    win = new BrowserWindow({width:800, height:200});
    win.loadFile('index.html');
        
}

app.on('ready',createWindow);

