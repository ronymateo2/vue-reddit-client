<template>
  <v-list dense expand>
    <PostListHeader></PostListHeader>
    <v-divider></v-divider>
    <transition-group name="list" tag="div">
      <template v-for="(item, index) in items">
        <v-list-item :key="item.id" link class="list-item" @click="select(item)">
          <PostItem :item="item" :index="index" @dismiss="dismiss"></PostItem>
        </v-list-item>
      </template>
    </transition-group>
  </v-list>
</template>

@<script lang="ts">
import Vue from 'vue';
import { PostItemUIData } from '@/model/post';
import PostItem from './PostItem.vue';
import PostListHeader from './PostListHeader.vue';
export default Vue.extend({
  props: {
    items: {
      type: Array as () => PostItemUIData[],
    },
  },
  components: {
    PostItem,
    PostListHeader,
  },
  methods: {
    dismiss(index: number) {
      this.items.splice(index, 1);
    },
    select(item: PostItemUIData) {
      this.$emit('select', item);
    },
  },
});
</script>
<style scoped>
.dashboard-header.v-toolbar.v-toolbar--fixed {
  padding-left: 0 !important;
}
.list-item {
  display: block;
}
.list-enter-active {
  transition: all 0.3s ease;
}
.list-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.list-enter,
.list-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.help-drawer {
  margin-top: 48px !important;
  max-height: calc(100% - 48px) !important;
}
</style>
