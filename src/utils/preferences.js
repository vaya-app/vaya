import { dialog } from 'electron';
import Store from 'electron-store';
import { writeFileSync, readFileSync } from 'fs';

function exportPreferences(event) {
  const savePath = dialog.showSaveDialogSync({
    title: 'Export preferences',
    defaultPath: 'vaya-preferences.json',
    buttonLabel: 'Export',
  });
  if (savePath) {
    const store = new Store();
    const preferences = JSON.stringify(store.store, null, 4);
    writeFileSync(savePath, preferences);
    event.sender.send('show-success-export-toast');
  }
}

function importPreferences(event) {
  const loadPath = dialog.showOpenDialogSync({
    title: 'Import preferences',
    buttonLabel: 'Import',
    properties: ['openFile'],
    filters: [
      {
        name: 'Configs',
        extensions: ['json'],
      },
    ],
  });
  if (loadPath) {
    const store = new Store();
    /**
     * TODO:
     * - add validation parser for JSON config file
     */
    const preferences = JSON.parse(readFileSync(loadPath[0], {
      encoding: 'utf8',
    }));
    store.store = preferences;
    event.sender.send('show-success-import-toast');
  }
}

export {
  exportPreferences,
  importPreferences,
};
