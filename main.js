const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const path = require('path');

const isDev = !app.isPackaged;

//! FOR
//! [13516:0209/100401.107:ERROR:gpu_init.cc(523)] Passthrough is not supported, GL is disabled, ANGLE is
app.disableHardwareAcceleration();

function createWindow() {
  const win = new BrowserWindow({
    title: 'Electron',
    width: 750,
    height: 600,
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile('index.html');
}

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  });
}

ipcMain.on('notify', (_, message) => {
  new Notification({ title: 'Notification', body: message }).show();
});

app.whenReady().then(createWindow);
