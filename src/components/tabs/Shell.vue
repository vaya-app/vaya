<template>
  <div>
    <p class="subtitle">Shell content will be here. Stay tuned. 👨‍💻</p>
    <CommandLine
      v-for="command in commands"
      :key="command"
      :command="command"
    />
    <input
      v-model="command"
      @keyup.enter="runCommand"
      class="input"
      type="text"
      placeholder="Please enter your request"
    />
  </div>
</template>

<script>
import CommandLine from '@/components/tabs/CommandLine.vue';

export default {
  name: 'Shell',
  components: {
    CommandLine,
  },
  data() {
    return {
      command: '',
      commands: [],
    };
  },
  methods: {
    runCommand() {
      const newLine = {
        isCmd: true,
        content: this.command,
      };
      this.commands.push(newLine);
      this.command = '';
    },
  },
};
</script>
