<template>
  <div>
    <div class="content">
      <!-- <CommandLine
        v-for="command in commands"
        :key="command"
        :command="command"
      /> -->
      <CommandLine/>
    </div>
    <input
      v-model="command"
      @keyup.enter="runCommand"
      class="input is-medium"
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
  mounted() {
    console.log(CommandLine);
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

<style scoped>
  .content {
    border: 2px solid teal;
    padding: 10px 20px;
    border-radius: 10px;
    height: 300px;
    overflow: scroll;
  }
</style>
