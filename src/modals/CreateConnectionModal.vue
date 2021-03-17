<template>
  <div class="modal is-active">
    <div class="modal-background" @click="close" />
    <div class="modal-content">
      <div class="box">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="My awesome cache" />
          </div>
        </div>
        <div class="field">
          <label class="label">Host</label>
          <div class="control">
            <input class="input" type="text" placeholder="localhost" />
          </div>
        </div>
        <div class="field">
          <label class="label">Port</label>
          <div class="control">
            <input class="input" type="text" placeholder="6379" />
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal is-pulled-left">
            <label class="label">Authentication</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input class="input" type="text" placeholder="default" />
              </p>
            </div>
            <div class="field">
              <p class="control">
                <input class="input" type="text" placeholder="********" />
              </p>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" />
              SSL
            </label>
          </div>
        </div>
        <div class="field is-grouped is-grouped-multiline">
          <p class="control" v-for="tag in tags" :key="tag.name">
            <button
              class="button is-light is-rounded"
              :class="[tag.color]"
              @click="tag.selected = !tag.selected"
            >
              <span class="icon is-small" v-if="tag.selected">
                <i class="fas fa-check"></i>
              </span>
              <span>{{ tag.name }}</span>
            </button>
          </p>
        </div>
        <div class="field" v-if="connection.showMessage">
          <div class="notification is-primary" v-if="connection.success">
            Connection successful. You can save it now.
          </div>
          <div class="notification is-danger" v-else>
            Could not connect. Please check your connection details and try
            again.
          </div>
        </div>
        <div class="field is-grouped is-grouped-right">
          <p class="control">
            <button @click="testConnection()" class="button is-info is-light">
              <span class="icon is-small" v-if="connection.isLoading">
                <i class="fas fa-spinner"></i>
              </span>
              <span>Test connection</span>
            </button>
          </p>
          <p class="control">
            <button
              @click="createConnection()"
              class="button is-primary is-light"
              :disabled="!connection.success"
            >
              Create
            </button>
          </p>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" @click="close" />
  </div>
</template>

<script>
import RedisHub from '@/utils/redis_hub';

export default {
  name: 'CreateConnectionModal',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      connection: {
        isLoading: false,
        success: false,
        showMessage: false,
      },
      tags: [
        {
          name: 'local',
          color: 'is-info',
          selected: false,
        },
        {
          name: 'dev',
          color: 'is-primary',
          selected: false,
        },
        {
          name: 'testing',
          color: 'is-success',
          selected: false,
        },
        {
          name: 'stage',
          color: 'is-warning',
          selected: false,
        },
        {
          name: 'production',
          color: 'is-danger',
          selected: false,
        },
      ],
    };
  },
  methods: {
    resetConnectionStatus() {
      this.connection.isLoading = false;
      this.connection.success = false;
      this.connection.showMessage = false;
    },
    async testConnection() {
      this.resetConnectionStatus();
      this.connection.isLoading = true;
      try {
        // TODO: read the real values from form
        await RedisHub.checkConnection({
          host: 'localhost',
          port: 6379,
        });
        this.connection.success = true;
      } finally {
        this.connection.showMessage = true;
        this.connection.isLoading = false;
      }
    },
    createConnection() {
      // TODO: save the real values from form
      const connections = this.store.get('connections') || [];
      connections.push({
        name: `Connection from store #${+new Date()}`,
        tags: [
          {
            name: 'local',
            color: 'is-warning',
          },
        ],
        databases: [
          {
            name: 'db0',
            keysCount: 47539,
          },
          {
            name: 'db1',
            keysCount: 23957,
          },
          {
            name: 'db3',
            keysCount: 9857,
          },
          {
            name: 'db4',
            keysCount: 765,
          },
        ],
      });
      this.store.set('connections', connections);
      this.emitter.emit('refresh-connections');
      this.close();
    },
    close() {
      this.emitter.emit('close-modal');
    },
  },
};
</script>
