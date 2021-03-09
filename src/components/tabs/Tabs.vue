<template>
  <div class="container">
    <div class="tabs is-centered">
      <ul>
        <li
          v-for="tab in tabs"
          :key="tab"
          @click="currentTab = tab"
          :class="{ 'is-active': currentTab === tab }"
        >
          <a>{{ tab }}</a>
        </li>
      </ul>
    </div>
    <component :is="currentTab"></component>
  </div>
</template>

<script>
import Keys from '@/components/tabs/Keys.vue';
import Shell from '@/components/tabs/Shell.vue';
import Insights from '@/components/tabs/Insights.vue';

export default {
  name: 'Tabs',
  components: {
    Keys,
    Shell,
    Insights,
  },
  data() {
    return {
      tabs: ['Keys', 'Shell', 'Insights'],
      currentTab: 'Keys',
    };
  },
};
</script>
