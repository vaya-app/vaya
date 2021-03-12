<template>
  <div>
    <p class="subtitle">Keys content will be here. Stay tuned. 🔑</p>
    <div class="field is-grouped">
      <p class="control">
        <button @click="testGet()" class="button is-info">Get</button>
      </p>
      <p class="control">
        <button @click="testSet()" class="button is-primary">Set</button>
      </p>
      <p class="control">
        <button @click="testDel()" class="button is-danger">Del</button>
      </p>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import RedisHub from '@/utils/redis_hub';

export default {
  name: 'Keys',
  methods: {
    async testGet() {
      const conn = new RedisHub({
        host: 'localhost',
        port: 6379,
      });
      const a = await conn.get('app');
      console.log(a);
    },
    async testSet() {
      const conn = new RedisHub({
        host: 'localhost',
        port: 6379,
      });
      const a = await conn.set('app', 'Vaya');
      console.log(a);
    },
    async testDel() {
      const conn = new RedisHub({
        host: 'localhost',
        port: 6379,
      });
      const a = await conn.del('app');
      console.log(a);
    },
  },
};
</script>
