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
    document.documentElement.scrollTop = 0;
    const id = this.$route.params['id'] as string;
  },
});
</script>