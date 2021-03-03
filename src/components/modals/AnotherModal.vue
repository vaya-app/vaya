<template>
  <div class="modal is-active">
    <div
      class="modal-background"
      @click="close"
    />
    <div class="modal-content">
      <div class="columns is-flex is-centered">
        <figure class="image">
          <img
            :src="data.picture_url"
            alt="logo"
          >
        </figure>
      </div>
    </div>
    <button
      class="modal-close is-large"
      @click="close"
    />
  </div>
</template>

<script>
export default {
  name: 'AnotherModal',
  props: {
    data: {
      type: Object,
      default: () => {}
    } 
  },
  methods: {
    close() {
      this.emitter.emit('close-modal');
    }
  }
};
</script>