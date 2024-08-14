<template>
  <v-app>
    <v-layout>
      <v-app-bar color="primary" dark>
        <v-app-bar-title>Vuetify Dashboard</v-app-bar-title>
        <v-btn to="/">Home</v-btn>
        <v-btn to="/login">Login</v-btn>
        <v-btn to="/signup">Sign Up</v-btn>
        <v-btn to="/profile">X Profile</v-btn>
        <v-icon class="mr-4" :icon="themeIcon" @click="toggleTheme"></v-icon>
      </v-app-bar>
      <v-main>
        <RouterView />
      </v-main>
    </v-layout>
    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();

const themeIcon = computed(() =>
  theme.global.current.value.dark
    ? "mdi-weather-sunny-off"
    : "mdi-weather-sunny"
);

onMounted(() => {
  const localTheme = localStorage.getItem("theme");
  if (localTheme) {
    theme.global.name.value = localTheme;
  }
});

const toggleTheme = () => {
  console.log("here", themeIcon.value, theme.global.current.value.dark);

  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
  localStorage.setItem("theme", theme.global.name.value);
};
</script>
