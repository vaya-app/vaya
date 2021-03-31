<template>
  <div class="modal is-active">
    <div class="modal-background" @click="close" />
    <div class="modal-content">
      <div class="box">
        <p class="subtitle">
          Are you sure you want to overwrite your current preferences?
        </p>
        <div class="field is-grouped is-grouped-right">
          <p class="control">
            <button @click="close()" class="button is-danger">Cancel</button>
          </p>
          <p class="control">
            <button @click="importPreferences()" class="button is-primary">Import</button>
          </p>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" @click="close" />
  </div>
</template>

<script>
import { ipcRenderer } from 'electron';

export default {
  name: 'ImportPreferencesConfirmationModal',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    importPreferences() {
      ipcRenderer.send('show-import-dialog');
      this.close();
    },
    close() {
      this.emitter.emit('close-modal');
    },
  },
};
</script>
