import { defineAsyncComponent, createApp, h } from 'vue';
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

createApp(RouterApp).mount('#app');
