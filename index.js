const {app, BrowserWindow} = require('electron');

let first = null;
let second = null;

app.on('ready', () => {
    first = new BrowserWindow();
    first.loadURL(`file://${__dirname}/index.html`);
    second = new BrowserWindow();
    second.loadURL(`file://${__dirname}/index.html`);
});