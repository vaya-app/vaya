<template>
  <div class="container is-fluid">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <p class="title">Preferences</p>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <a href="/">
            <span class="icon is-large">
              <i class="fas fa-times" />
            </span>
          </a>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Language</label>
      <div class="control has-icons-left">
        <div class="select">
          <select>
            <option disabled>Select language</option>
            <option selected>English</option>
            <option>Русский</option>
          </select>
        </div>
        <span class="icon is-left">
          <i class="fas fa-globe" />
        </span>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <div class="buttons">
          <button
            @click="showImportConfirmationModal()"
            class="button is-primary is-light"
          >
            Import
          </button>
          <button @click="exportPreferences()" class="button is-info is-light">
            Export
          </button>
        </div>
      </div>
    </div>

    <BaseModal />
  </div>
</template>

<script>
import { ipcRenderer } from 'electron';
import BaseModal from '@/modals/BaseModal.vue';
import { toast } from 'bulma-toast';

export default {
  name: 'Settings',
  components: {
    BaseModal,
  },
  created() {
    ipcRenderer.on('show-success-export-toast', () => {
      toast({
        message: 'Your preferences was exported successfully',
        type: 'is-success',
        position: 'bottom-center',
        dismissible: true,
        pauseOnHover: true,
      });
    });

    ipcRenderer.on('show-success-import-toast', () => {
      toast({
        message: 'Your preferences was imported successfully',
        type: 'is-success',
        position: 'bottom-center',
        dismissible: true,
        pauseOnHover: true,
      });
    });
  },
  methods: {
    exportPreferences() {
      ipcRenderer.send('show-export-dialog');
    },
    showImportConfirmationModal() {
      this.emitter.emit('open-modal', {
        component: 'ImportPreferencesConfirmationModal',
        data: {},
      });
    },
  },
};
</script>
