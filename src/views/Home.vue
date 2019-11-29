<template>
  <div class="home">
    <v-navigation-drawer app fixed clipped v-model="navList" width="400px" class="nav-drawer">
      <PostList :items="items" @select="select"></PostList>
    </v-navigation-drawer>
    <v-content style="margin-top:32px;">
      <v-container fluid grid-list-lg pa-0>
        <v-layout row wrap ma-0 align-center py-3>
          <v-flex xs12 sm3 px-4 py-2 pb-0 hidden-lg-and-up>
            <v-btn class="elevation-0 ma-0 card-with-border" @click="postNav = true">View Posts</v-btn>
          </v-flex>
        </v-layout>
        <v-layout row ma-0>
          <v-flex xs12 pa-4>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
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