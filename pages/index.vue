<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Where do you wanna spend your time at?</h1>
    <SearchBar />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <div v-for="place in places" :key="place.id" class="p-4 border rounded-md">
        <h2 class="text-xl font-semibold">{{ place.name }}</h2>
        <p>{{ place.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SearchBar from '@/components/SearchBar.vue'

const places = ref([
  { id: 1, name: 'Amusement Park', description: 'A fun place with rides and games.' },
  { id: 2, name: 'Zoo', description: 'A place to see various animals.' },
  // Add more places as needed
])
</script>