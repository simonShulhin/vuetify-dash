<template>
  <v-card width="400" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          prepend-icon="mdi-account"
          label="Username"
        ></v-text-field>
        <v-text-field
          prepend-icon="mdi-lock"
          label="Password"
          :append-inner-icon="!showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          :type="showPassword ? 'text' : 'password'"
          @click:append-inner="showPassword = !showPassword"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="success" variant="outlined">Register</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="info" variant="outlined">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

//
const showPassword = ref(false);
</script>
