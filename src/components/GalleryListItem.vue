<template>
  <v-flex xs12 sm6 md4 mb-3>
    <v-card flat class="mx-auto" max-width="300">
      <v-img class="white--text align-end" height="200px" :src="item.thumbnail">
        <v-card-title>{{item.author}}</v-card-title>
      </v-img>
    </v-card>
  </v-flex>
</template>
<script lang="ts">
import Vue from 'vue';
import { PostItemUIData } from '@/model/post';
export default Vue.extend({
  props: {
    item: {
      type: Object as () => PostItemUIData,
    },
  },
});
</script>
<style>
</style>