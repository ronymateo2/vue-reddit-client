<template>
  <v-content style="margin-top:32px;">
    <v-container grid-list-lg pt-0 pb-5>
      <v-layout row wrap my-4 align-center>
        <v-flex xs12 sm8 order-xs2 order-sm1>
          <h4 class="display-1 d-block">
            <b>Gallery</b>
          </h4>
        </v-flex>
      </v-layout>
      <GalleryList :items="items"></GalleryList>
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