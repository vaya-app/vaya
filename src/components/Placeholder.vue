<template>
  <div class="hero is-fullheight">
    <div class="hero-body has-text-centered">
      <div class="container">
        <h1 class="title">
          Vaya 🔥
        </h1>
        <p class="subtitle">
          Something <strong>special</strong> coming 👀
        </p>
        <button
          class="button is-danger"
          @click="count++"
        >
          ❤️ &lt;=&gt; {{ count }}
        </button>
        <hr>
        <p>
          <span class="icon-text">
            <span class="icon has-text-success">
              <i class="fas fa-check-square" />
            </span>
            <span>Make shinny Fontawesome 5.15.2 icons work</span>
          </span>
        </p>
        <p>
          <span class="icon-text">
            <span class="icon has-text-success">
              <i class="fas fa-check-square" />
            </span>
            <span>Make magic <a href="/settings">routing</a></span>
          </span>
        </p>
        <p>
          <span class="icon-text">
            <span class="icon has-text-success">
              <i class="fas fa-check-square" />
            </span>
            <span>Make awesome <strong>reusable</strong> 👉 modals 👈
              (<span @click="showDemoModal()">error</span> and <span @click="showAnotherDemoModal()">kitty</span>)
            </span>
          </span>
        </p>
      </div>
    </div>
    <BaseModal />
  </div>
</template>

<script>
import BaseModal from '@/components/modals/BaseModal.vue';

export default {
  name: 'Placeholder',
  components: {
    BaseModal,
  },
  data() {
    return {
      count: 13,
    };
  },
  methods: {
    showDemoModal() {
      this.emitter.emit('open-modal', {
        component: 'ErrorModal',
        data: {
          title: 'Oopsie',
          body: 'Bad things happen',
        },
      });
    },
    showAnotherDemoModal() {
      this.emitter.emit('open-modal', {
        component: 'AnotherModal',
        data: {
          picture_url: 'https://placekitten.com/300/300',
        },
      });
    },
  },
};
</script>
