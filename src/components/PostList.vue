<template>
  <v-list dense expand>
    <v-list-item disabled>
      <v-list-item-action>
        <v-icon>mdi-view-dashboard</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Posts</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <PostItem :key="item.id" v-for="(item) in items" :item="item"></PostItem>
  </v-list>
</template>

@<script lang="ts">
import Vue from 'vue';
import { PostItemData } from '@/model/post';
import PostItem from './PostItem.vue';
export default Vue.extend({
  props: {
    items: {
      type: Array as () => PostItemData[],
    },
  },
  components: {
    PostItem,
  },
});
</script>
<style></style>
