<template>
  <div id="root">
    <SidebarMenu class="sidebar" />
    <div class="panel">
      <PanelTitle title="Panel Title" />
      <div class="cards-container">
        <Card :title="cards[0].title" :content="cards[0].content" />
        <Card :title="cards[1].title" :content="cards[1].content" />
        <Card :title="cards[2].title" :content="cards[2].content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { RouterView } from 'vue-router';
import SidebarMenu from '@/components/SidebarMenu.vue';
import PanelTitle from '@/components/PanelTitle.vue';
import Card from '@/components/Card.vue';

const props = defineProps(['msg']); // Se você tiver propriedades, adicione-as aqui
const emit = defineEmits(); // Se você tiver eventos personalizados, adicione-os aqui

const cards = [
  { title: 'Card 1', content: 'This is a random card.' },
  { title: 'Card 2', content: 'This is another random card.' },
  { title: 'Card 3', content: 'Yet another random card.' },
];
</script>

<style scoped lang="scss">
#root {
  display: grid;
  grid-template-areas: 'sidebar panel';
  grid-template-columns: auto 1fr;
  font-family: sans-serif;
}

.sidebar {
  grid-area: sidebar;
}

.panel {
  grid-area: panel;
  background-color: #f2f2f2;
  padding: 20px;
}

.cards-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
