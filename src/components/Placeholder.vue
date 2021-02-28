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
        <span class="icon-text">
          <span class="icon has-text-success">
            <i class="fas fa-check-square" />
          </span>
          <span>Make shinny Fontawesome 5.15.2 icons work</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Placeholder',
  data() {
    return { count: 13 };
  }
};
</script>
