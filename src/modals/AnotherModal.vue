<template>
  <div class="modal is-active">
    <div class="modal-background" @click="close" />
    <div class="modal-content">
      <figure class="image container is-128x128">
        <img :src="data.picture_url" alt="logo" />
      </figure>
    </div>
    <button class="modal-close is-large" @click="close" />
  </div>
</template>

<script>
export default {
  name: 'AnotherModal',
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
