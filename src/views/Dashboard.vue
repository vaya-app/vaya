<template>
  <section class="section columns is-fullheight">
    <aside class="column is-4 menu">
      <p class="menu-label">Connections</p>
      <ConnectionList />
    </aside>
    <div class="column is-8">
      <Tabs />
    </div>
    <BaseModal />
  </section>
</template>

<script>
import ConnectionList from '@/components/connections/ConnectionsList.vue';
import Tabs from '@/components/tabs/Tabs.vue';
import BaseModal from '@/modals/BaseModal.vue';

export default {
  name: 'Dashboard',
  components: {
    ConnectionList,
    Tabs,
    BaseModal,
  },
};
</script>
