<template>
  <div class="container is-fluid">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <p class="title">
            Preferences
          </p>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <a href="/">
            <span class="icon is-large">
              <i class="fas fa-times" />
            </span>
          </a>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Language</label>
      <div class="control has-icons-left">
        <div class="select">
          <select>
            <option disabled>
              Select language
            </option>
            <option selected>
              English
            </option>
            <option>Русский</option>
          </select>
        </div>
        <span class="icon is-left">
          <i class="fas fa-globe" />
        </span>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button is-info is-light">
          Export
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Settings'
};
</script>
