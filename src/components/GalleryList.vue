<template>
  <div>
    <template v-for="(item) in items">
      <v-card :key="item.id" class="mx-auto" max-width="400">
        <v-img class="white--text align-end" height="200px" :src="item.thumbnail">
          <v-card-title>{{item.author}}</v-card-title>
        </v-img>
      </v-card>
    </template>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { PostItemUIData } from '@/model/post';
export default Vue.extend({
  props: {
    items: {
      type: Array as () => PostItemUIData[],
    },
  },
});
</script>