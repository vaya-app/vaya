import { dialog } from 'electron';
import Store from 'electron-store';
import { writeFileSync, readFileSync } from 'fs';

function exportPreferences() {
  const savePath = dialog.showSaveDialogSync({
    title: 'Export preferences',
    defaultPath: 'vaya-preferences.json',
    buttonLabel: 'Export',
  });
  if (savePath) {
    const store = new Store();
    const preferences = JSON.stringify(store.store, null, 4);
    // TODO: add some success/error message (toast?) after export
    writeFileSync(savePath, preferences);
  }
}

function importPreferences() {
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
     * - add some success/error message (toast?) after import
     */
    const preferences = JSON.parse(readFileSync(loadPath[0], {
      encoding: 'utf8',
    }));
    store.store = preferences;
  }
}

export {
  exportPreferences,
  importPreferences,
};
