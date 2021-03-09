<template>
  <component :is="component" v-if="active" :data="componentData" />
</template>

<script>
import ErrorModal from '@/modals/ErrorModal.vue';
import AnotherModal from '@/modals/AnotherModal.vue';

export default {
  name: 'BaseModal',
  components: {
    ErrorModal,
    AnotherModal,
  },
  data() {
    return {
      active: false,
      component: null,
      componentData: {},
    };
  },
  created() {
    this.emitter.on('open-modal', this.openModal);
    this.emitter.on('close-modal', this.closeModal);
  },
  methods: {
    openModal(payload) {
      this.active = true;
      this.component = payload.component;
      this.componentData = payload.data;
    },
    closeModal() {
      this.active = false;
    },
  },
};
</script>
