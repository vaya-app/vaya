<template>
  <p>
   {{ command.content }}
  </p>
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
