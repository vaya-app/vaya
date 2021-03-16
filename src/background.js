import { app, BrowserWindow } from 'electron';
import installExtension from 'electron-devtools-installer';
import Store from 'electron-store';

const store = new Store();

async function createWindow() {
  const windowSize = store.get('window_size');
  const win = new BrowserWindow({
    width: windowSize ? windowSize.width : 800,
    height: windowSize ? windowSize.height : 600,
    minWidth: 800,
    minHeight: 600,
    titleBarStyle: 'hidden',
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
  });

  await win.loadURL('http://localhost:8080');
  win.webContents.openDevTools();

  win.on('resized', () => {
    const size = win.getSize();
    store.set('window_size', {
      width: size[0],
      height: size[1],
    });
  });
}

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('ready', async () => {
  // TODO: figure out how to ignore extension usage of browser API https://github.com/electron/electron/issues/23662
  // Ignore "ExtensionLoadWarning" for now
  await installExtension({
    id: 'ljjemllljcmogpfapbkkighbhhppjdbg',
    electron: '>=1.2.1',
  });
  await createWindow();
});
