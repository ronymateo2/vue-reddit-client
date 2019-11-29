<template>
  <v-app>
    <v-container fluid pa-0>
      <Header></Header>
      <router-view />
    </v-container>
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
import Header from "./Header.vue";

export default Vue.extend({
  computed: {},
  components: {
    Header
  },
  methods: {}
});
</script>
