<template>
  <div>
    <div>
      <div>{{ item.author }}</div>
      <div>{{ item.title }}</div>
      <div>{{ item.num_comments }}</div>
      <v-img v-if="item.thumbnail" :src="item.thumbnail"></v-img>
      <v-btn color="orange" text @click="add">Add To Gallery</v-btn>
    </div>
  </div>
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
  methods: {
    add() {
      this.$emit('add', this.item);
    },
  },
});
</script>
<style>
</style>