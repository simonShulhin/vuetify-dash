<script setup lang="ts">
import { ref } from "vue";

const tab = ref(null);

const tabList = [
  {
    title: "Posts",
    value: "posts",
  },
  {
    title: "Media",
    value: "media",
  },
  {
    title: "Replies",
    value: "replies",
  },
  {
    title: "News",
    value: "news",
  },
];
</script>

<template>
  <v-container class="w-50 pa-0">
    <v-img
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      lazy-src="https://picsum.photos/id/11/100/60"
      :height="300"
      cover
    >
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular
            color="grey-lighten-4"
            indeterminate
          ></v-progress-circular>
        </div>
      </template>
    </v-img>
    <v-row style="margin-top: -100px">
      <v-col cols="auto">
        <v-avatar
          image="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
          :size="200"
        ></v-avatar
      ></v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto" align-self="center">
        <v-btn>Edit Profile</v-btn>
      </v-col>
    </v-row>
    <v-icon>mdi-briefcase-outline</v-icon>
    <v-tabs class="pl-6" v-model="tab">
      <v-tab
        v-for="tab in tabList"
        :key="tab.value"
        :value="tab.value"
        color="primary"
      >
        {{ tab.title }}
      </v-tab>
    </v-tabs>
  </v-container>
</template>
