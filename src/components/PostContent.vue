<template>
  <div>
    <div>
      <div>{{ item.author }}</div>
      <div>{{ item.title }}</div>
      <div>{{ item.num_comments }}</div>
      <PostImg v-if="item.thumbnail" :item="item"></PostImg>
      <v-btn v-if="item.thumbnail" color="orange" text @click="add">Add To Gallery</v-btn>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { PostItemData } from '@/model/post';
import PostImg from './PostImg.vue';
export default Vue.extend({
  props: {
    item: {
      type: Object as () => PostItemData,
    },
  },
  components: {
    PostImg,
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