<template>
  <div>
    <nav class="navbar is-fixed-top">
      <div class="navbar-menu">
        <div class="navbar-end">
          <a href="/" class="navbar-item">
            <span class="icon">
              <i class="fas fa-times"></i>
            </span>
          </a>
        </div>
      </div>
    </nav>

    <section class="section py-0">
      <p class="title">Settings</p>

      <div class="field">
        <label class="label">Tags</label>
        <div class="control">
          <p>
            Here will be an option to add your own tags, which may be used in
            Connections.
          </p>
        </div>
      </div>

      <div class="field">
        <label class="label">Import / Export preferences</label>
        <div class="control">
          <div class="buttons">
            <button
              @click="showImportConfirmationModal()"
              class="button is-primary is-light"
            >
              Import
            </button>
            <button
              @click="exportPreferences()"
              class="button is-info is-light"
            >
              Export
            </button>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Versions</label>
        <div class="control">
          <ul>
            <li><b>Vaya:</b> {{ versions.vaya }}</li>
            <li><b>Electron:</b> {{ versions.electron }}</li>
            <li><b>Node:</b> {{ versions.node }}</li>
            <li><b>Chrome:</b> {{ versions.chrome }}</li>
          </ul>
        </div>
      </div>

      <BaseModal />
    </section>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron';
import { toast } from 'bulma-toast';
import BaseModal from '@/modals/BaseModal.vue';
import getVersions from '@/utils/versions';

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

    this.versions = getVersions();
  },
  data() {
    return {
      versions: {},
    };
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
