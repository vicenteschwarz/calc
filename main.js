require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
  });
   
const { app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const {configurarHandleSelectFile} = require('./handleUpload')


function createWindow() {
    const win = new BrowserWindow({
        width: 350,
        height: 550,
        autoHideMenuBar: true,
        icon: path.join(__dirname, 'assets', 'favicon.ico'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
        }
    }); 

    win.loadFile('janelas/calc.html');
}


app.whenReady().then(function () {
    createWindow();
    configurarHandleSelectFile()
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})