<template>
  <div class="hero is-fullheight">
    <div class="hero-body has-text-centered">
      <div class="container">
        <h1 class="title">Vaya 🔥</h1>
        <p class="subtitle">Something <strong>special</strong> coming 👀</p>
        <button class="button is-danger" @click="state.count++">
          ❤️ &lt;=&gt; {{ state.count }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({ count: 0 });
</script>
