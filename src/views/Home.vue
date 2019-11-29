<template>
  <div class="home">
    <v-navigation-drawer app fixed clipped v-model="navList" width="400px" class="nav-drawer">
      <PostList :items="items" @select="select" @dismiss="dismiss"></PostList>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn @click="dismissAll" block>Dismiss all </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-content style="margin-top:32px;">
      <v-container fluid grid-list-lg pa-0>
        <v-layout row wrap ma-0 align-center py-3>
          <v-flex xs12 sm3 px-4 py-2 pb-0 hidden-lg-and-up>
            <v-btn class="elevation-0 ma-0 card-with-border" @click="navList = true">
              View Posts
              <v-icon class="ml-1">mdi-chevron-right</v-icon>
            </v-btn>
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
import { PostItemData, PostItemUIData } from '@/model/post';
import { mapState } from 'vuex';
export default Vue.extend({
  data() {
    return {
      items: [] as PostItemUIData[],
      selectedPost: {} as PostItemUIData | null,
      navList: null,
    };
  },
  components: {
    PostList,
  },
  computed: {
    ...mapState({
      isLoaded: 'isLoaded',
      posts: 'posts',
    }),
  },
  methods: {
    async getPosts() {
      const posts = await redditService.getPosts();
      return posts.map((i: PostItemData) => ({ ...i, read: false })) as PostItemUIData[];
    },

    dismiss(index: number) {
      this.items.splice(index, 1);
    },
    select(item: PostItemUIData) {
      // TODO: dont mutate
      this.$store.dispatch('selectPost', item);
      const itemSelected = this.items.find((t: PostItemUIData) => t.id === item.id);
      if (itemSelected) {
        itemSelected.read = true;
      }
      const path = `/post/${item.id}`;
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
    dismissAll() {
      this.$store.dispatch('loadPosts', []);
      this.items = [];
    },
  },
  async mounted() {
    this.selectedPost = null;
    if (this.isLoaded === false) {
      this.items = await this.getPosts();
      await this.$store.dispatch('loadPosts', this.items);
    } else {
      this.items = this.posts;
    }
  },
});
</script>
<style scoped>
.nav-drawer {
  margin-top: 48px !important;
  max-height: calc(100% - 48px) !important;
}
</style>
