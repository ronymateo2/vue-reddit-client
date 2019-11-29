<template>
  <div>
    <div>
      <div>
        <v-icon>mdi-account</v-icon>
        {{ item.author }}
      </div>
      <div>
        <v-icon>mdi-format-align-left</v-icon>
        {{ item.title }}
      </div>
      <div>
        <v-icon> mdi-calendar </v-icon>
        {{ formatedCreated }}
      </div>
      <div>
        <v-icon>mdi-comment-multiple-outline</v-icon>
        {{ item.num_comments }} Comments
      </div>
      <PostImg v-if="item.thumbnail" :item="item"></PostImg>
      <v-btn v-if="item.thumbnail" color="orange" text @click="add">Add To Gallery</v-btn>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import moment from 'moment';

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
  computed: {
    formatedCreated() {
      return moment.unix(this.item.created).fromNow();
    },
  },
  methods: {
    add() {
      this.$emit('add', this.$props.item);
    },
  },
});
</script>
<style></style>
