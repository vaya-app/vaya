<template>
  <div>
    <nav class="navbar is-fixed-top">
      <div class="navbar-menu">
        <div class="navbar-end">
          <a href="/settings" class="navbar-item">
            <span class="icon">
              <i class="fas fa-cog"></i>
            </span>
          </a>
        </div>
      </div>
    </nav>
    <section class="section columns is-fullheight py-0">
      <aside class="column is-4 menu">
        <p class="menu-label">Connections</p>
        <ConnectionList />
      </aside>
      <div class="column is-8">
        <Tabs />
      </div>
      <BaseModal />
    </section>
  </div>
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
