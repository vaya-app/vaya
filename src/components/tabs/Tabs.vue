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
    <keep-alive>
      <component :is="currentTab"></component>
    </keep-alive>
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
      currentTab: 'Shell',
    };
  },
};
</script>
