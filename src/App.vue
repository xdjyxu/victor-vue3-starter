<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  // import HelloWorld from './components/HelloWorld.vue'
  const title = useTitle();
  const { t } = useI18n();
  title.value = t("title");
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
  #app {
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
  }
</style>
