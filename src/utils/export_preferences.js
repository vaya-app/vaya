import { dialog } from 'electron';
import Store from 'electron-store';
import { writeFileSync } from 'fs';

export default function exportPreferences() {
  const savePath = dialog.showSaveDialogSync({
    title: 'Export preferences',
    defaultPath: 'vaya-preferences.json',
    buttonLabel: 'Export',
  });
  if (savePath) {
    const store = new Store();
    writeFileSync(savePath, JSON.stringify(store.store, null, 4));
  }
}
