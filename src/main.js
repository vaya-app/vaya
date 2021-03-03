import { defineAsyncComponent, createApp, h } from 'vue';
import mitt from 'mitt';
import 'bulma/css/bulma.min.css';
import './styles/app.css';

import routes from './routes';

const RouterApp = {
  data: () => ({
    currentRoute: window.location.pathname
  }),
  computed: {
    CurrentComponent() {
      const page = routes[this.currentRoute] || 'Error';
      // Magic, since we can't use "require" statement with Vite
      return defineAsyncComponent(() => import(`./components/${page}.vue`));
    }
  },
  render() {
    return h(this.CurrentComponent);
  }
};

const app = createApp(RouterApp);
const emitter = mitt();

app.config.globalProperties.emitter = emitter;

app.mount('#app');
