<template>
  <div class="home">
    <PostList></PostList>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PostList from "@/components/PostList.vue";
export default Vue.extend({
  components: {
    PostList
  }
});
</script>
