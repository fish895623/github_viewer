const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
    let win = new BrowserWindow({width: 800, height: 600});
    win.loadURL('https://github.com/fish895623').then();
});

app.on('window-all-closed', () => {
    app.quit();
});
