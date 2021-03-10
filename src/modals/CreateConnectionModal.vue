<template>
  <div class="modal is-active">
    <div class="modal-background" @click="close" />
    <div class="modal-content">
      <div class="box">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="My awesome cache" />
          </div>
        </div>
        <div class="field">
          <label class="label">Host</label>
          <div class="control">
            <input class="input" type="text" placeholder="localhost" />
          </div>
        </div>
        <div class="field">
          <label class="label">Port</label>
          <div class="control">
            <input class="input" type="text" placeholder="6379" />
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal is-pulled-left">
            <label class="label">Authentication</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input class="input" type="text" placeholder="default" />
              </p>
            </div>
            <div class="field">
              <p class="control">
                <input class="input" type="text" placeholder="********" />
              </p>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" />
              SSL
            </label>
          </div>
        </div>
        <div class="field is-grouped is-grouped-multiline">
          <!-- <label class="label">Tags</label> -->
          <p class="control" v-for="tag in tags" :key="tag.name">
            <button
              class="button is-light is-rounded"
              :class="[tag.color]"
              @click="tag.selected = !tag.selected"
            >
              <span class="icon is-small" v-if="tag.selected">
                <i class="fas fa-check"></i>
              </span>
              <span>{{ tag.name }}</span>
            </button>
          </p>
        </div>
        <div class="field is-grouped is-grouped-right">
          <p class="control">
            <button class="button is-info is-light">Test connection</button>
          </p>
          <p class="control">
            <button class="button is-primary is-light">Create</button>
          </p>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" @click="close" />
  </div>
</template>

<script>
export default {
  name: 'CreateConnectionModal',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      tags: [
        {
          name: 'local',
          color: 'is-info',
          selected: false,
        },
        {
          name: 'dev',
          color: 'is-primary',
          selected: false,
        },
        {
          name: 'testing',
          color: 'is-success',
          selected: false,
        },
        {
          name: 'stage',
          color: 'is-warning',
          selected: false,
        },
        {
          name: 'production',
          color: 'is-danger',
          selected: false,
        },
      ],
    };
  },
  methods: {
    close() {
      this.emitter.emit('close-modal');
    },
  },
};
</script>
