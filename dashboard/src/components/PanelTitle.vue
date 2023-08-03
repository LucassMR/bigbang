<template>
    <h1 class="panel-title">{{ title }}</h1>
  </template>
  
  <script setup>
  const props = defineProps(['title']);
  </script>
  
  <style>
  .panel-title {
    color: #333;
    text-align: center;
  }
  </style>
  