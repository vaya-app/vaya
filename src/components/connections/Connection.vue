<template>
  <li>
    <a :class="{ 'is-active': isActive }" @click.prevent="toogleActive()">
      <p>
        {{ connection.name }}
      </p>
      <span
        v-for="tag in connection.tags"
        :key="tag.name"
        class="tag is-light mr-1"
        :class="[tag.color]"
        >{{ tag.name }}</span
      >
    </a>
    <ul v-if="isActive">
      <li v-for="database in connection.databases" :key="database">
        <a
          >{{ database.name }}
          <span class="is-pulled-right">{{ database.keysCount }} keys</span></a
        >
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'Connection',
  props: {
    connection: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toogleActive() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
