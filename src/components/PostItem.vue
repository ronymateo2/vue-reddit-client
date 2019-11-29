<template>
  <div>
    <div>
      <v-chip v-if="item.read" class="ma-2" color="teal" text-color="white">
        <v-avatar left>
          <v-icon>mdi-checkbox-marked-circle</v-icon>
        </v-avatar>Seen
      </v-chip>
      <div>{{ item.author }}</div>
      <div>{{ item.title }}</div>
      <div>{{ item.num_comments }}</div>
      <v-img v-if="item.thumbnail" :src="item.thumbnail"></v-img>
    </div>
    <v-btn color="orange" text @click="dismiss">Dismiss</v-btn>

    <v-divider></v-divider>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { PostItemUIData } from '@/model/post';
export default Vue.extend({
  props: {
    item: {
      type: Object as () => PostItemUIData,
    },
    index: {
      type: Number,
    },
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