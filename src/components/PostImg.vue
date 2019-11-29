<template>
  <v-card class="mx-auto" max-width="300">
    <v-img class="white--text align-end" height="200px" :src="item.thumbnail">
      <v-card-title>{{item.author}}</v-card-title>
    </v-img>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue';
import { PostItemData } from '@/model/post';
export default Vue.extend({
  props: {
    item: {
      type: Object as () => PostItemData,
    },
  },
});
</script>