<template>
  <div class="bottom-space">
    <div class="notification is-danger" v-if="errorShow">
      <button class="delete" v-on:click="errorClose"></button>
      <ul v-for="errorMessage in errorMessages" v-bind:key="errorMessage">
        <li>{{ errorMessage }}</li>
      </ul>
    </div>
    <div class="notification is-success" v-if="successShow">
      <button class="delete" v-on:click="successClose"></button>
      <ul v-for="successMessage in successMessages" v-bind:key="successMessage">
        <li>{{ successMessage }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
        errorShow() {
            return this.$store.state.message.errorShow;
        },
        errorMessages() {
            return this.$store.state.message.errorMessages;
        },
        successShow() {
            return this.$store.state.message.successShow;
        },
        successMessages() {
            return this.$store.state.message.successMessages;
        },
    },
    methods: {
        errorClose() {
            this.$store.dispatch('message/errorClear');
        },
        successClose() {
            this.$store.dispatch('message/successClear');
        },
    },
};
</script>

<style scoped>
.bottom-space {
    padding-bottom: 0.75em;
}
</style>