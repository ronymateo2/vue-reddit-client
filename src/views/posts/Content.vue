<template>
  <PostContent v-if="item" :item="item"></PostContent>
</template>
<script lang="ts">
import Vue from 'vue';
import { PostItemData } from '@/model/post';
import PostContent from '@/components/PostContent.vue';
import { mapState } from 'vuex';
export default Vue.extend({
  components: {
    PostContent,
  },
  computed: {
    ...mapState({
      item: 'selectedPost',
    }),
  },
  mounted() {
    // TODO: to load from post
    // normally it will get data from api endpoint
    const id = this.$route.params.id as string;
  },
  watch: {
    item() {
      document.documentElement.scrollTop = 0;
    },
  },
});
</script>