<template>
  <div>{{ command.content }}</div>
</template>

<script>
export default {
  name: 'CommandLine',
  props: {
    command: {
      type: Object,
      required: true,
    },
  },
};
</script>
