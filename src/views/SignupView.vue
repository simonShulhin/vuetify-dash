<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 v-ripple>Signup</h1>
        <v-form ref="form">
          <v-text-field
            label="Email"
            type="email"
            v-model="email"
            :rules="[rules.required, rules.email]"
            v-click-outside="() => console.log('hello')"
          ></v-text-field>
          <v-autocomplete
            label="Select your browser"
            :items="['Google', 'Safari', 'Firefox']"
          ></v-autocomplete>
          <v-file-input
            label="Add your photo"
            prepend-icon=""
            prepend-inner-icon="mdi-camera"
            accept="image/png, image/jpeg, image/bmp"
          ></v-file-input>
          <v-date-picker color="primary"></v-date-picker>
          <v-checkbox
            label="Terms & conditions"
            :rules="[rules.required]"
          ></v-checkbox>
          <v-btn type="submit" color="primary">Submit</v-btn>
          <v-btn @click="resetForm()">Reset Form</v-btn>
        </v-form>
        <v-form ref="form">
          <v-text-field
            label="Email"
            type="email"
            v-model="email"
            :rules="[rules.required, rules.email]"
            v-click-outside="() => console.log('hello')"
          ></v-text-field>
          <v-autocomplete
            label="Select your browser"
            :items="['Google', 'Safari', 'Firefox']"
          ></v-autocomplete>
          <v-file-input
            label="Add your photo"
            prepend-icon=""
            prepend-inner-icon="mdi-camera"
            accept="image/png, image/jpeg, image/bmp"
          ></v-file-input>
          <v-date-picker color="primary"></v-date-picker>
          <v-checkbox
            label="Terms & conditions"
            :rules="[rules.required]"
          ></v-checkbox>
          <v-btn type="submit" color="primary">Submit</v-btn>
          <v-btn @click="resetForm()">Reset Form</v-btn>
        </v-form>
        <v-btn @click="() => form.resetValidation()">Reset Validation</v-btn>
      </v-col>
    </v-row>

    <v-row v-intersect="onIntersect">
      <v-col>
        <v-skeleton-loader v-if="isVisible" type="table"></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { IntersectionTypeAnnotation } from "@babel/types";
import { ref } from "vue";

const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const email = ref("");
const form = ref(null);

const isVisible = ref(false);

const rules = {
  required: (value: string) => !!value || "Field is required",
  email: (value: string) => EMAIL_PATTERN.test(value) || "Invalid e-mail.",
};

const resetForm = () => {
  console.log("reset form");

  if (form.value) {
    form.value.reset();
  }
};

const onIntersect = (
  isIntersecting: boolean,
  entries: IntersectionObserverEntry[]
) => {
  setTimeout(() => {
    isVisible.value = isIntersecting;
  }, 1000);
  console.log("in view", entries[0]);
};
</script>
