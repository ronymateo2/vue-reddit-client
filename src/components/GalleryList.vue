<template>
  <v-layout row wrap mb-3>
    <template v-for="(item) in items">
      <GalleryListItem :key="item.id" :item="item"></GalleryListItem>
    </template>
  </v-layout>
</template>
<script lang="ts">
import Vue from 'vue';
import { PostItemUIData } from '@/model/post';
import GalleryListItem from './GalleryListItem.vue';
export default Vue.extend({
  props: {
    items: {
      type: Array as () => PostItemUIData[],
    },
  },
  components: {
    GalleryListItem,
  },
});
</script>