import { createApp, h } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import mitt from 'mitt';
import '@/styles/app.sass';

import routes from './routes';

const RouterApp = {
  data: () => ({
    currentRoute: window.location.pathname,
  }),
  computed: {
    CurrentComponent() {
      const page = routes[this.currentRoute] || 'Placeholder';
      return require(`./views/${page}.vue`).default;
    },
  },
  render() {
    return h(this.CurrentComponent);
  },
};

const app = createApp(RouterApp);
const emitter = mitt();

app.config.globalProperties.emitter = emitter;

app.use(VueApexCharts);

app.mount('#app');
