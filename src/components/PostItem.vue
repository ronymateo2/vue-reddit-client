<template>
  <div>
    <div>
      <v-chip v-if="item.read" class="ma-2" color="teal" text-color="white">
        <v-avatar left> <v-icon>mdi-checkbox-marked-circle</v-icon> </v-avatar>Seen
      </v-chip>
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
    </div>
    <v-btn color="orange" text @click="dismiss">Dismiss</v-btn>
    <v-divider></v-divider>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import moment from 'moment';
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
  computed: {
    formatedCreated() {
      return moment.unix(this.item.created).fromNow();
    },
  },
  methods: {
    dismiss() {
      this.$emit('dismiss', this.$props.index);
    },
  },
});
</script>
<style></style>
