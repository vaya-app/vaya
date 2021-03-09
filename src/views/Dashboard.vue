<template>
  <section class="section columns is-fullheight">
    <aside class="column is-4 menu">
      <p class="menu-label">Connections</p>
      <ConnectionList />
    </aside>
    <div class="column is-8">
      <Tabs />
    </div>
  </section>
</template>

<script>
import ConnectionList from '@/components/connections/ConnectionsList.vue';
import Tabs from '@/components/tabs/Tabs.vue';

export default {
  name: 'Dashboard',
  components: {
    ConnectionList,
    Tabs,
  },
};
</script>
