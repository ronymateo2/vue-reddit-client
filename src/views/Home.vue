<template>
  <div class="home">
    <v-navigation-drawer app fixed clipped v-model="navList" width="400px" class="nav-drawer">
      <PostList :items="items" @select="select"></PostList>
    </v-navigation-drawer>
    <router-view></router-view>
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
      navList: null,
    };
  },
  components: {
    PostList,
  },
  methods: {
    async getPosts() {
      this.items = await redditService.getPosts();
    },
    select(item: PostItemData) {
      const path = `/${item.id}`;
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
  },
  mounted() {
    this.getPosts();
  },
});
</script>
<style scoped>
.nav-drawer {
  margin-top: 48px !important;
  max-height: calc(100% - 48px) !important;
}
</style>