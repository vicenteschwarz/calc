const { ipcMain, dialog } = require('electron');
const fs = require('fs')

function configurarHandleSelectFile() {
    ipcMain.handle('select file', abrirSeletorArquivo)
}

module.exports = {
    configurarHandleSelectFile
}