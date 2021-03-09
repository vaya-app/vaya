<template>
  <div class="modal is-active">
    <div class="modal-background" @click="close" />
    <div class="modal-content">
      <div class="notification">
        <button class="delete" @click="close" />
        <h1 class="title">
          {{ data.title }}
        </h1>
        <p class="subtitle">
          {{ data.body }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorModal',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    close() {
      this.emitter.emit('close-modal');
    },
  },
};
</script>
