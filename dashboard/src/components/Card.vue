<template>
    <div class="card" :style="{ backgroundColor: randomColor }">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
    </div>
  </template>
  
  <script setup>
  const props = defineProps(['title', 'content']);
  const randomColors = ['#ff9999', '#99ccff', '#99ff99'];
  const randomColor = randomColors[Math.floor(Math.random() * randomColors.length)];
  </script>
  
  <style>
  .card {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    width: 30%;
  }
  
  .card h2 {
    margin-bottom: 10px;
  }
  
  .card p {
    color: #666;
  }
  </style>
  