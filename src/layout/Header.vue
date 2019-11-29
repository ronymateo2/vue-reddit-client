<template>
  <v-toolbar
    dark
    app
    fixed
    height="48"
    class="py-3 elevation-0 dashboard-header"
  >
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text to="/">Post</v-btn>
      <v-btn text to="/gallery">Gallery</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  computed: {},
  methods: {}
});
</script>
<style>
.dashboard-header.v-toolbar.v-toolbar--fixed {
  padding-left: 0 !important;
  position: fixed;
  z-index: 1;
}
</style>
