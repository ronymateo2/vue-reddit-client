<template>
  <v-layout row wrap mb-3>
    <template v-for="(item) in items">
      <v-flex xs12 sm6 md4 mb-3 :key="item.id">
        <v-card flat class="mx-auto" max-width="200">
          <v-img class="white--text align-end" height="200px" :src="item.thumbnail">
            <v-card-title>{{item.author}}</v-card-title>
          </v-img>
        </v-card>
      </v-flex>
    </template>
  </v-layout>
</template>
<script lang="ts">
import Vue from 'vue';
import { PostItemUIData } from '@/model/post';
export default Vue.extend({
  props: {
    items: {
      type: Array as () => PostItemUIData[],
    },
  },
});
</script>