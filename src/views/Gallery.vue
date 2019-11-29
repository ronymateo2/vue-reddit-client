<template>
  <v-content style="margin-top:32px;">
    <v-container fluid grid-list-lg pa-0>
      <v-layout row wrap ma-0 align-center py-3>
        <v-flex xs12 sm3 px-4 py-2 pb-0>
          <v-btn class="elevation-0 ma-0 card-with-border">
            Gallery
            <v-icon class="ml-1">mdi-chevron-right</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
      <v-layout row ma-0>
        <v-flex xs12 pa-4>
          <GalleryList :items="items"></GalleryList>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script lang="ts">
import Vue from 'vue';
import { PostItemUIData } from '@/model/post';
import GalleryList from '@/components/GalleryList.vue';
import { mapState } from 'vuex';
export default Vue.extend({
  components: {
    GalleryList,
  },
  computed: {
    ...mapState({
      items: 'gallery',
    }),
  },
});
</script>