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
            <span>Make magic routing (<a href="/settings">settings</a> and <a href="/error">error</a>)</span>
          </span>
        </p>
        <p>
          <span class="icon-text">
            <span class="icon has-text-success">
              <i class="fas fa-check-square" />
            </span>
            <span @click="demoModalVisible = true">Make awesome <i>(not so)</i>reusable 👉 modals 👈</span>
          </span>
        </p>
      </div>
    </div>
    <teleport to="#modals-target">
      <Modal
        v-if="demoModalVisible"
        @close="demoModalVisible = false"
      >
        👋
        I'm a Modal component <br>
        I'm not so reusable as I want be 😞 <br>
        Hopefully I'll be fixed soon and my parent component will be able to accept icon, title
        and body as props and I will render whatever it needs.
      </Modal>
    </teleport>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  name: 'Placeholder',
  components: {
    Modal
  },
  data() {
    return { 
      count: 13,
      demoModalVisible: false
    };
  }
};
</script>
