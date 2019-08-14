#!/usr/bin/env node
const {app,BrowserWindow}= require('electron');


function createWindow(){
    win = new BrowserWindow({width:800, height:200});
    var n= 20;
    console.log(n);
    win.loadFile('index.html');
    win.on('closed',()=>{
        console.log('closed');
        win=null;
        
    });
}

app.on('ready',createWindow);
app.on('window-all-closed', ()=>{
   console.log('window-all-closed');
   if (process.platform != 'darwin') {
    app.quit();
    //code
   }
});
app.on('activate',()=>{
    console.log('activate');
    if (win==null) {
        createWindow();
        
    }
    });
