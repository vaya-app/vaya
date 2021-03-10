<template>
  <ul class="menu-list">
    <div class="field is-grouped">
      <p class="control is-expanded">
        <input
          class="input"
          type="text"
          placeholder="Name..."
          v-model="searchKeyword"
        />
      </p>
      <p class="control">
        <button @click="showCreateConnectionModal()" class="button is-primary is-light">
          <span class="icon">
            <i class="fas fa-plus" />
          </span>
        </button>
      </p>
    </div>
    <Connection
      :connection="connection"
      v-for="connection in filteredConnections"
      :key="connection.name"
    />
  </ul>
</template>

<script>
import Connection from '@/components/connections/Connection.vue';

export default {
  name: 'ConnectionList',
  components: {
    Connection,
  },
  data() {
    return {
      searchKeyword: '',
      connections: [],
    };
  },
  mounted() {
    this.connections = [
      {
        name: 'First connection',
        tags: [
          {
            name: 'dev',
            color: 'is-primary',
          },
          {
            name: 'do',
            color: 'is-info',
          },
        ],
        databases: [
          {
            name: 'db0',
            keysCount: 4766,
          },
          {
            name: 'db1',
            keysCount: 838,
          },
        ],
      },
      {
        name: 'Second connection',
        tags: [
          {
            name: 'local',
            color: 'is-warning',
          },
        ],
        databases: [
          {
            name: 'db0',
            keysCount: 95678,
          },
          {
            name: 'db1',
            keysCount: 7567,
          },
          {
            name: 'db3',
            keysCount: 3485,
          },
        ],
      },
    ];
  },
  computed: {
    filteredConnections() {
      return this.connections.filter((conn) => conn.name.toLowerCase().includes(this.searchKeyword.toLowerCase()));
    },
  },
  methods: {
    showCreateConnectionModal() {
      this.emitter.emit('open-modal', {
        component: 'CreateConnectionModal',
        data: {},
      });
    },
  },
};
</script>
