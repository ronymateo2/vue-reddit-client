<template>
  <div class="home">
    <PostList :items="items"></PostList>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PostList from '@/components/PostList.vue';
import { redditService } from '@/services/reddit';
import { PostItemData } from '@/model/post';
export default Vue.extend({
  data() {
    return {
      items: [] as PostItemData[] | null,
    };
  },
  components: {
    PostList,
  },
  methods: {
    async getPosts() {
      this.items = await redditService.getPosts();
    },
  },
  mounted() {
    this.getPosts();
  },
});
</script>
