<template>
  <div class="modal is-active">
    <div
      class="modal-background"
      @click="close"
    />
    <div class="modal-content">
      <div class="notification">
        <button
          class="delete"
          @click="close"
        />
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  emits: ['close'],
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>