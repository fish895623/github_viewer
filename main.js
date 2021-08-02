const {app, BrowserWindow} = require('electron');
const userDataPath = app.getPath('userData');
const path = require('path');
const execPath = path.dirname(process.execPath);

// 캐시 저장 장소 지정
app.setPath('userData', execPath + '/' + 'data');

app.on('ready', () => {
  let win = new BrowserWindow({width: 800, height: 600});
  win.loadURL('https://github.com/fish895623').then();
  console.log(execPath);
});

app.on('window-all-closed', () => {
  app.quit();
});