<template>
  <div>
    <div>
      <v-chip v-if="item.read" class="ma-2" color="teal" text-color="white">
        <v-avatar left>
          <v-icon>mdi-checkbox-marked-circle</v-icon>
        </v-avatar>Seen
      </v-chip>
      <div>
        <v-icon>mdi-account</v-icon>
        {{ item.author }}
      </div>
      <div>
        <v-icon>mdi-message-text-outline</v-icon>
        {{ item.title }}
      </div>
      <PostImg v-if="item.thumbnail" :item="item"></PostImg>
      <div>
        <v-chip class="ma-2" color="green" text-color="white">
          <v-avatar left class="green">{{ item.num_comments }}</v-avatar>
          <v-icon>mdi-comment-multiple-outline</v-icon>
        </v-chip>
      </div>
    </div>
    <v-btn color="orange" text @click="dismiss">Dismiss</v-btn>

    <v-divider></v-divider>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { PostItemUIData } from '@/model/post';
import PostImg from './PostImg.vue';
export default Vue.extend({
  props: {
    item: {
      type: Object as () => PostItemUIData,
    },
    index: {
      type: Number,
    },
  },
  components: {
    PostImg,
  },
  methods: {
    dismiss() {
      this.$emit('dismiss', this.index);
    },
  },
});
</script>
<style>
</style>