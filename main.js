const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    title: 'study',
    width: 800,
    height: 600,
  });
  // dev tool
  mainWindow.webContents.openDevTools();
  const view = url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true,
  });
  mainWindow.loadURL(view);
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
